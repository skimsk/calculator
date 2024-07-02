import Table from "../../components/Table.js";
import ButtonDelete from "../../components/buttons/ButtonDelete.js";
import InputQuantity from "../../components/form/InputQuantity.js";
import Order from "./Order.js";

class OrderTableProducts extends Table {

    constructor() {
        super('order')
        this.thead(['#', 'Наименование', 'Кол-во', 'Цена, руб.', '#']);
    }


    createRow(product) {
        const deleteButton = new ButtonDelete();
        const quantityInput = new InputQuantity('input-qty', 1, 99).setValue(product.quantity);

        deleteButton.on('click', () => {
            Order.deleteProduct(product.id);
        })

        quantityInput.on('change', () => {
            product.quantity = quantityInput.getValue();
            Order.setProduct(product.id, product)
        })

        return [
            product.index, 
            product.name, 
            quantityInput.render(), 
            product.price + ' ₽', 
            deleteButton.render()
        ]

        // const debug = document.createElement('div');
        // debug.innerHTML = `
        //     ${product.name} <br>
        //     <div style="font-weight: bold; margin-top:5px;">
        //         KPI-монт: ${product.kpi.installer}; 
        //         KPI-сбор: ${product.kpi.assembler};
        //         распил: Ш:${product.sawing.width}/В:${product.sawing.height}/И:${product.sawing.impost}
        //     </div>
        // `

        // return [
        //     product.index, 
        //     debug, 
        //     quantityInput.render(), 
        //     product.price + ' ₽', 
        //     deleteButton.render()
        // ]
    }

    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
    update(order) {
        this.clear(); // Fix table HTML refresh bug
        order.getProducts().forEach((product, index) => {
            product.index = index + 1;
            this.addRow(product.id, this.createRow(product));
        })
        super.update();
    }

}

export default new OrderTableProducts();
