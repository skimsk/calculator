import ExtrasData from "../../data/extras.js";
import User from "../../user/User.js";
import Order from "../Order/Order.js";
import Table from "../../components/Table.js";
import Button from "../../components/buttons/Button.js";
import InputQuantity from "../../components/form/InputQuantity.js";


class ExtrasTable extends Table {

    constructor() {
        super('extras');
        this.thead(['#', 'Наименование', 'Кол-во', 'Цена, руб.', '#']);

        // Загружаем таблицу
        this.setRowsFromData();
    }

    setRowsFromData() {
        let itemIndex = 1;
        ExtrasData[User.getRole()].forEach(item => {
            item.id = itemIndex;
            this.addRow(item.id, this.createRow(item));
            itemIndex++;
        })
        super.update();
    }

    createRow(item) {
        const itemInOrder = Order.getExtrasItem(item.id);
        const ItemQuantity = this.createItemQuantity(item);
        const ButtonOrder = this.createButtonOrder(itemInOrder);

        ItemQuantity.setValue(itemInOrder ? itemInOrder.quantity : 1);

        ButtonOrder.on('click', () => {
            Order.addOrUpdateExtras({
                id: item.id,
                name: item.name,
                quantity: ItemQuantity.getValue(),
                price: item.price,
            });
            ButtonOrder.addClass('active').setText('Изменить');
        });

        return [
            item.id,
            item.name, 
            ItemQuantity.render(), 
            item.price + ' ₽', 
            ButtonOrder.render()
        ];
    }

    createItemQuantity(item) {
        const input = new InputQuantity('input-qty', 1)
        input.setLabel(item.unit);
        input.setId('input-qty-'+item.id);
        return input;
    }

    createButtonOrder(inOrder = undefined) {
        const button = new Button('button-order');

        inOrder ? button.addClass('active').setText('Изменить') : button.removeClass('active').setText('В заказ');
        return button;
    }

    

    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
    update(order) {
        // Обновляем таблицу
        this.setRowsFromData();
        // console.log('Extras Table updated');
    }


}

export default new ExtrasTable();
