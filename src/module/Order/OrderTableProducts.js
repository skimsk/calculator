import Table from "../../components/Table.js";
import ButtonDelete from "../../components/buttons/ButtonDelete.js";
import InputQuantity from "../../components/form/InputQuantity.js";
import Order from "./Order.js";

class OrderTableProducts extends Table {

    constructor() {
        super('order');
        this.columns = ['№', 'Наименование', 'Кол-во', 'Цена,руб.', 'Скидка,руб.', 'Итого,руб.', ''];
        this.thead(this.columns);

        // Используем тайм-аут, чтобы дать таблице время на рендеринг
        setTimeout(() => this.updateDiscountColumn(), 0);
    }

    createRow(product) {
        const deleteButton = new ButtonDelete();
        const quantityInput = new InputQuantity('input-qty', 1, 99).setValue(product.quantity);
    
        deleteButton.on('click', () => {
            Order.deleteProduct(product.id);
        });
    
        quantityInput.on('change', () => {
            product.quantity = quantityInput.getValue();
            Order.setProduct(product.id, product);
        });
    
        let productPrice = product.price;
        let productRAL = product.ral;
        let CanvasPrice = product.canvasPrice;
        let ralMinPrice = product.ralMinPrice;
        let OptionsPrice = product.OptionsPrice;
        let MontagePrice = product.MontagePrice;
    
        let ndc = Order.ndc;
        let beznal = Order.beznal;
        let discount = Order.discount;
    
        // Рассчитываем коэффициент rate с учётом beznal
        let rate = 1 + (beznal || 0) / 100;
    
        // Расчёт цены с учётом beznal
        let productPriceWithBeznal = productPrice * rate;
    
        // Общая цена с учётом количества и beznal
        let totalPrice;
        let discountAmount = 0;
    
        if (productRAL) {
            if (product.quantity === 1) {
                totalPrice = productPriceWithBeznal;
                discountAmount = totalPrice * (discount / 100);
                totalPrice -= discountAmount;
            } else if (product.quantity === 2) {
                totalPrice = (productPrice + CanvasPrice + OptionsPrice + MontagePrice) * rate;
                discountAmount = totalPrice * (discount / 100);
                totalPrice -= discountAmount;
            } else {
                totalPrice = (productPrice + CanvasPrice + OptionsPrice + MontagePrice +
                              (CanvasPrice + ralMinPrice + OptionsPrice + MontagePrice) * (product.quantity - 2)) * rate;
                discountAmount = totalPrice * (discount / 100);
                totalPrice -= discountAmount;
            }
        } else {
            totalPrice = productPriceWithBeznal * product.quantity;
            discountAmount = totalPrice * (discount / 100);
            totalPrice -= discountAmount;
        }
    
        // Обновляем данные заказа
        Order.totalPriceWithoutDiscount += totalPrice + discountAmount;
        Order.totalDiscount += discountAmount;
        Order.totalPriceWithDiscount += totalPrice;
    
        const row = [
            product.index,
            product.name,
            quantityInput.render(),
            `${productPriceWithBeznal.toFixed(0)} ₽`,  // Цена с учётом beznal
            discount ? `${discountAmount.toFixed(0)} ₽` : '',  // Общая сумма скидки
            `${totalPrice.toFixed(0)} ₽`,
            deleteButton.render()
        ];
    
        return row;
    }
        

    update(order) {
        this.clear();
        order.totalPriceWithoutDiscount = 0;
        order.totalDiscount = 0;
        order.totalPrice = 0;
        order.totalPriceWithDiscount = 0;

        order.getProducts().forEach((product, index) => {
            product.index = index + 1;
            this.addRow(product.id, this.createRow(product));
        });
        super.update();
        this.updateDiscountColumn();  // Обновляем видимость столбца скидки
    }

    updateDiscountColumn() {
        const discountColumnIndex = this.columns.indexOf('Скидка,руб.') + 1;
        if (Order.discount) {
            // Показываем столбец скидки
            document.querySelectorAll(`thead th:nth-child(${discountColumnIndex})`).forEach(th => th.style.display = 'table-cell');
            document.querySelectorAll(`tbody td:nth-child(${discountColumnIndex})`).forEach(td => td.style.display = 'table-cell');
        } else {
            // Скрываем столбец скидки
            document.querySelectorAll(`thead th:nth-child(${discountColumnIndex})`).forEach(th => th.style.display = 'none');
            document.querySelectorAll(`tbody td:nth-child(${discountColumnIndex})`).forEach(td => td.style.display = 'none');
        }
    }

    saveAsPDF() {
        const element = document.getElementById('OrderTableProducts');
        if (!element) return;
    
        // Temporarily hide buttons and inputs
        const iqPlusElements = Array.from(document.querySelectorAll('.iq-plus'));
        const iqMinusElements = Array.from(document.querySelectorAll('.iq-minus'));
        const deleteButtonElements = Array.from(document.querySelectorAll('tbody td:last-child'));
        const quantityContainers = Array.from(document.querySelectorAll('.input-quantity'));
    
        // Hide buttons and inputs
        iqPlusElements.forEach(el => el.style.display = 'none');
        iqMinusElements.forEach(el => el.style.display = 'none');
        deleteButtonElements.forEach(el => el.style.display = 'none');
    
        // Store original quantities and replace inputs with their values
        const originalQuantities = [];
        quantityContainers.forEach(container => {
            const input = container.querySelector('input');
            if (input) {
                const value = input.value;
                originalQuantities.push({ container, input, value });
    
                // Create a new span element to replace the input
                const span = document.createElement('span');
                span.style.display = 'inline-block';
                span.style.textAlign = 'center';
                span.style.width = '100%';
                span.style.verticalAlign = 'middle'; // Center the text vertically
                span.textContent = value;
    
                // Replace input with span
                input.style.display = 'none';
                container.insertBefore(span, input);
                container.style.textAlign = 'center'; // Center the text horizontally
                container.style.verticalAlign = 'middle'; // Center the text vertically
            }
        });
    
        // Use jsPDF and html2canvas to save the modified table as PDF
        import('jspdf').then(jsPDF => {
            import('html2canvas').then(html2canvas => {
                html2canvas(element, { scale: 2 }).then(canvas => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF.jsPDF('p', 'pt', 'a4'); // 'portrait', 'points', 'A4'
                    const imgProps = pdf.getImageProperties(imgData);
                    const pdfWidth = pdf.internal.pageSize.getWidth() - 80; // Include margins
                    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                    const marginLeft = 40;
                    const marginTop = 40;
    
                    pdf.addImage(imgData, 'PNG', marginLeft, marginTop, pdfWidth, pdfHeight);
                    pdf.save('OrderTableProducts.pdf');
    
                    // Restore original state
                    iqPlusElements.forEach(el => el.style.display = '');
                    iqMinusElements.forEach(el => el.style.display = '');
                    deleteButtonElements.forEach(el => el.style.display = '');
                    originalQuantities.forEach(({ container, input, value }) => {
                        container.style.textAlign = ''; // Reset the text alignment
                        container.style.verticalAlign = ''; // Reset the vertical alignment
                        container.innerHTML = ''; // Clear the content
                        container.appendChild(input); // Re-add the input element
                        input.style.display = '';
    
                        // Recreate and re-add buttons with correct positioning
                        const plusButton = document.createElement('button');
                        plusButton.type = 'button';
                        plusButton.className = 'iq-plus';
                        container.appendChild(plusButton);
    
                        const minusButton = document.createElement('button');
                        minusButton.type = 'button';
                        minusButton.className = 'iq-minus';
                        container.insertBefore(minusButton, input);
    
                        // Re-add click handlers to the buttons
                        plusButton.addEventListener('click', () => {
                            input.value = parseInt(input.value, 10) + 1;
                            input.dispatchEvent(new Event('change'));
                        });
    
                        minusButton.addEventListener('click', () => {
                            input.value = parseInt(input.value, 10) - 1;
                            input.dispatchEvent(new Event('change'));
                        });
                    });
                });
            });
        });
    }           
}

export default new OrderTableProducts();
