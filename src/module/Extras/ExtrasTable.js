import ExtrasData from "../../data/extras.js";
import User from "../../user/User.js";
import Order from "../Order/Order.js";
import Table from "../../components/Table.js";
import Button from "../../components/buttons/Button.js";
import InputQuantity from "../../components/form/InputQuantity.js";

class ExtrasTable extends Table {

    constructor() {
        super('extras');
        this.thead(['№', 'Наименование', 'Кол-во', 'Цена, руб.', '', '']);

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
    
        ItemQuantity.on('change', () => {
            Order.addOrUpdateExtras({
                id: item.id,
                name: item.name,
                quantity: ItemQuantity.getValue(),
                price: item.price,
            });
            ButtonOrder.addClass('active').setText('Изменить');
        });
    
        ButtonOrder.on('click', () => {
            Order.addOrUpdateExtras({
                id: item.id,
                name: item.name,
                quantity: ItemQuantity.getValue(),
                price: item.price,
            });
            ButtonOrder.addClass('active').setText('Изменить');
        });
    
        let discountAmountPerUnit = 0;
        if (Order.discount) {
            discountAmountPerUnit = item.price * (Order.discount / 100);
        }
        const discountAmount = discountAmountPerUnit;
    
        return [
            item.id,
            item.name,
            ItemQuantity.render(),
            `${item.price} ₽`,
            `${discountAmount.toFixed(0)} ₽`,
            ButtonOrder.render()
        ];
    }    

    createItemQuantity(item) {
        const input = new InputQuantity('input-qty', 1)
        input.setLabel(item.unit);
        input.setId(`input-qty-${item.id}`);
        return input;
    }

    createButtonOrder(inOrder = undefined) {
        const button = new Button('button-order');

        inOrder ? button.addClass('active').setText('Изменить') : button.removeClass('active').setText('В заказ');
        return button;
    }

    update(order) {
        this.setRowsFromData();
    }
}

export default new ExtrasTable();
