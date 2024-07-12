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
}

export default new OrderTableExtras();
