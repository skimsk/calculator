import Table from "../../components/Table.js";
import Button from "../../components/buttons/Button.js";
import ButtonDelete from "../../components/buttons/ButtonDelete.js";
import InputQuantity from "../../components/form/InputQuantity.js";
import Order from "./Order.js";

class OrderTableExtras extends Table {

    constructor() {
        super('order')
        this.thead(['#', 'Наименование', 'Кол-во', 'Цена, руб.', '#']);
    }

    setRowsFromCart(items) {
        this.clear();
        items.forEach((item, index) => {
            item.index = index + 1;
            this.addRow(item.id, this.createRow(item));
        })

        super.update();
    }

    createRow(item) {
        const deleteButton = new ButtonDelete();
        const quantityInput = new InputQuantity('input-qty', 1, 99).setValue(item.quantity);

        deleteButton.on('click', () => {
            Order.deleteExtras(item.id);
        })

        quantityInput.on('change', () => {
            item.quantity = quantityInput.getValue();
            Order.setExtrasItem(item.id, item);
        })

        return [
            item.index, 
            item.name, 
            quantityInput.render(), 
            item.price + ' ₽', 
            deleteButton.render()
        ]
    }

    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
    update(order) {
        this.setRowsFromCart(order.getExtras());
    }

}

export default new OrderTableExtras();
