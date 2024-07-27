import Table from "../../components/Table.js";
import ButtonDelete from "../../components/buttons/ButtonDelete.js";
import InputQuantity from "../../components/form/InputQuantity.js";
import Order from "./Order.js";

class OrderTableExtras extends Table {

    constructor() {
        super('order');
        this.columns = ['№', 'Наименование', 'Кол-во', 'Цена,руб.', 'Скидка,руб.', 'Итого,руб.', ''];
        this.thead(this.columns);

        // Изначально скрываем столбец скидки, если скидка не активна
        this.updateDiscountColumn(true);
    }

    setRowsFromCart(items) {
        this.clear();
        items.forEach((item, index) => {
            item.index = index + 1;
            this.addRow(item.id, this.createRow(item));
        });

        super.update();
    }

    createRow(item) {
        const deleteButton = new ButtonDelete();
        const quantityInput = new InputQuantity('input-qty', 1, 99).setValue(item.quantity);

        let ndc = Order.ndc;
        let beznal = Order.beznal;
        let discount = Order.discount;

        let rate = (item.productRAL && item.quantity === 1) 
            ? 1 
            : (beznal ? (1 + beznal / 100) : (1 + ndc / 100));

        const itemPriceWithRate = item.price * rate;
        let discountAmountPerUnit = 0;
        if (discount) {
            discountAmountPerUnit = itemPriceWithRate * (discount / 100);
        }
        const finalItemPricePerUnit = itemPriceWithRate - discountAmountPerUnit;
        const totalDiscountAmount = discountAmountPerUnit * item.quantity;
        const totalPrice = item.quantity * finalItemPricePerUnit;

        deleteButton.on('click', () => {
            Order.deleteExtras(item.id);
        });

        quantityInput.on('change', () => {
            item.quantity = quantityInput.getValue();
            Order.setExtrasItem(item.id, item);
            const newTotalDiscountAmount = discountAmountPerUnit * item.quantity;
            const newTotalPrice = item.quantity * finalItemPricePerUnit;
            this.updateTotalPrice(item.id, newTotalPrice, newTotalDiscountAmount);
        });

        const row = [
            item.index, 
            item.name, 
            quantityInput.render(), 
            `${itemPriceWithRate.toFixed(0)} ₽`,
            discount ? `${totalDiscountAmount.toFixed(0)} ₽` : '',  // Показ общей скидки
            `${totalPrice.toFixed(0)} ₽`, 
            deleteButton.render()
        ];

        return row;
    }

    updateTotalPrice(itemId, newTotal, newDiscountTotal) {
        const totalElement = document.getElementById(`total-${itemId}`);
        const discountElement = document.getElementById(`discount-${itemId}`);
        if (totalElement) {
            totalElement.textContent = `${newTotal.toFixed(0)} ₽`;
        }
        if (discountElement) {
            discountElement.textContent = `${newDiscountTotal.toFixed(0)} ₽`;
        }
    }

    update(order) {
        this.setRowsFromCart(order.getExtras());
        this.updateDiscountColumn();  // Обновляем видимость столбца скидки

        // Обновляем общие суммы
        order.totalExtrasDiscount = this.calculateTotalDiscount(order.getExtras());
        order.totalExtrasPrice = this.calculateTotalPrice(order.getExtras());
    }

    // Метод для обновления видимости столбца скидки
    updateDiscountColumn(initial = false) {
        const discountColumnIndex = this.columns.indexOf('Скидка,руб.');
        if (Order.discount || initial) {
            document.querySelectorAll(`thead th:nth-child(${discountColumnIndex + 1})`).forEach(th => th.style.display = 'table-cell');
            document.querySelectorAll(`tbody td:nth-child(${discountColumnIndex + 1})`).forEach(td => td.style.display = 'table-cell');
        } else {
            document.querySelectorAll(`thead th:nth-child(${discountColumnIndex + 1})`).forEach(th => th.style.display = 'none');
            document.querySelectorAll(`tbody td:nth-child(${discountColumnIndex + 1})`).forEach(td => td.style.display = 'none');
        }
    }

    // Метод для расчета общей скидки
    calculateTotalDiscount(extras) {
        return extras.reduce((sum, item) => {
            let ndc = Order.ndc;
            let beznal = Order.beznal;
            let discount = Order.discount;

            let rate = (item.productRAL && item.quantity === 1) 
                ? 1 
                : (beznal ? (1 + beznal / 100) : (1 + ndc / 100));

            const itemPriceWithRate = item.price * rate;
            let discountAmountPerUnit = 0;
            if (discount) {
                discountAmountPerUnit = itemPriceWithRate * (discount / 100);
            }

            return sum + discountAmountPerUnit * item.quantity;
        }, 0);
    }

    // Метод для расчета общей суммы
    calculateTotalPrice(extras) {
        return extras.reduce((sum, item) => {
            let ndc = Order.ndc;
            let beznal = Order.beznal;
            let discount = Order.discount;

            let rate = (item.productRAL && item.quantity === 1) 
                ? 1 
                : (beznal ? (1 + beznal / 100) : (1 + ndc / 100));

            const itemPriceWithRate = item.price * rate;
            let discountAmountPerUnit = 0;
            if (discount) {
                discountAmountPerUnit = itemPriceWithRate * (discount / 100);
            }
            const finalItemPricePerUnit = itemPriceWithRate - discountAmountPerUnit;
            return sum + (item.quantity * finalItemPricePerUnit);
        }, 0);
    }

    saveAsPDF() {
        const elementProducts = document.getElementById('OrderTableProducts');
        const elementExtras = document.getElementById('OrderTableExtras');
        if (!elementProducts || !elementExtras) return;

        // Temporarily hide buttons and inputs for both tables
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

        // Use jsPDF and html2canvas to save the modified tables as a single PDF
        import('jspdf').then(jsPDF => {
            import('html2canvas').then(html2canvas => {
                html2canvas(elementProducts, { scale: 2 }).then(canvasProducts => {
                    html2canvas(elementExtras, { scale: 2 }).then(canvasExtras => {
                        const pdf = new jsPDF.jsPDF('p', 'pt', 'a4'); // 'portrait', 'points', 'A4'

                        // Add first table
                        const imgDataProducts = canvasProducts.toDataURL('image/png');
                        const imgPropsProducts = pdf.getImageProperties(imgDataProducts);
                        const pdfWidth = pdf.internal.pageSize.getWidth() - 80; // Include margins
                        const pdfHeightProducts = (imgPropsProducts.height * pdfWidth) / imgPropsProducts.width;
                        const marginLeft = 40;
                        const marginTop = 40;

                        pdf.addImage(imgDataProducts, 'PNG', marginLeft, marginTop, pdfWidth, pdfHeightProducts);

                        // Add second table on a new page
                        pdf.addPage();
                        const imgDataExtras = canvasExtras.toDataURL('image/png');
                        const imgPropsExtras = pdf.getImageProperties(imgDataExtras);
                        const pdfHeightExtras = (imgPropsExtras.height * pdfWidth) / imgPropsExtras.width;

                        pdf.addImage(imgDataExtras, 'PNG', marginLeft, marginTop, pdfWidth, pdfHeightExtras);

                        pdf.save('OrderTables.pdf');

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
        });
    }
}

export default new OrderTableExtras();