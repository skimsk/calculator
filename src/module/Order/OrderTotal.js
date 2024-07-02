import { fetchOrderToBitrix24 } from '../../api.js'; 
import Button from "../../components/buttons/Button.js";
import Order from "./Order.js";
import OrderForm from './OrderForm.js';
import DTOOrderBitrix from '../../dto/DTOOrderBitrix.js';


class OrderTotal {

    constructor() {
        this.$wrapper = document.createElement('div');
        this.$buttonOrder = new Button('button_order').setText('Заказать').setIcon('icon-loader');
        this.$buttonSave = new Button('button_save').setText('Сохранить рассчет')
        this.$actions = document.createElement('div');
        this.$total = document.createElement('div');

        this.$wrapper.className = 'container';
        this.$total.className = 'order-total';
        this.$actions.className = 'order-actions';
        this.$buttonOrder.setClass('button button-order');
        this.$buttonSave.setClass('button button-save');
        this.$actions.append(this.$buttonOrder.render());
        this.$actions.append(this.$buttonSave.render());
        this.$wrapper.append(this.$total, this.$actions);

        this.setButtonOrderActions();
    }


    setButtonOrderActions() {
        this.$buttonOrder.on('click', () => {
            if (OrderForm.validate()) {
                this.sendOrderToBitrix();
            }
        })
    }



    /**
     * Отправка заказа в CRM Bitrix24
     */
    sendOrderToBitrix() { 
        // Loader start ...
        this.$buttonOrder.addClass('loading').setDisabled(true);

        let OrderFormData = {};
        for (const inputData of OrderForm.getFormData().values()) {
            OrderFormData[inputData.key] = inputData.value || '';   
        }

        const request = new DTOOrderBitrix({
            ...Order,
            ...OrderFormData,
        });

        fetchOrderToBitrix24(request).then((response) => {
            // Loader end.
            this.$buttonOrder.removeClass('loading').setDisabled(false);

            if (response.status === 'ok') {
                if (confirm(`Заказ успешно отправлен. Очистить данные заказа?`)) {
                    Order.clear();      // Очистка данных заказа
                    OrderForm.reset();  // Очистка формы заказа на значения по умолчанию
                }
            } else {
                console.log(response);
            }
        }).catch(error => console.log(error));
    }


    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
    update(order) {
        let summary = `<ul class="order-total-debug">`;
        summary += `<li>Сумма: <span>${order.totalPrice}</span> ₽</li>`;
        /*
        if (order.getUserRole() === 'employee') {
            summary += `<li>KPI.Монт: <span>${order.kpi.installer}</span> ₽ </li>`;
        }
        summary += `</ul>`;
        */
        // console.log(order.kpi);
        
        this.$total.innerHTML = summary;
    }

    render() {
        // this.$actions.append(this.$buttonSave.render(), this.$buttonOrder.render());
        return this.$wrapper;
    }

}




export default new OrderTotal();