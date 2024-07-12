import { fetchOrderToBitrix24 } from '../../api.js'; 
import Button from "../../components/buttons/Button.js";
import Order from "./Order.js";
import OrderForm from './OrderForm.js';
import DTOOrderBitrix from '../../dto/DTOOrderBitrix.js';
import OrderTableExtras from './OrderTableExtras.js';
import OrderTableProducts from './OrderTableProducts.js'; // Импортируем ваш объект с таблицей

class OrderTotal {

    constructor() {
        this.$wrapper = document.createElement('div');
        this.$buttonOrder = new Button('button_order').setText('Отправить в CRM').setIcon('icon-loader');
        this.$buttonSave = new Button('button_save').setText('Сохранить');
        this.$actions = document.createElement('div');
        this.$total = document.createElement('div');

        this.$wrapper.className = 'container';
        this.$total.className = 'order-total';
        this.$actions.className = 'order-actions';
        this.$buttonOrder.setClass('button button-order');
        this.$buttonSave.setClass('button button-save');
        //this.$actions.append(this.$buttonOrder.render());
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

        // Добавляем сумму скидок и итого из OrderTableExtras
        const extrasDiscount = OrderTableExtras.calculateTotalDiscount(order.getExtras());
        const extrasTotalPrice = OrderTableExtras.calculateTotalPrice(order.getExtras());

        let summary = `<ul class="order-total-debug">`;
        summary += `<li>Итого: <span>${(order.totalPriceWithDiscount + extrasTotalPrice - extrasDiscount + order.totalDelivery + order.totalDopuslugi).toFixed(0)}</span>₽</li>`;
        summary += `</ul>`;  // Закрываем тег <ul>
        
        let summarydelivery = `<ul class="order-total-delivery">`;
        summarydelivery += `<li>Доставка: <span>${order.totalDelivery}</span>₽</li>`;
        summarydelivery += `</ul>`;  // Закрываем тег <ul>

        let summarydiscount = `<ul class="order-total-discount">`;
        summarydiscount += `<li>Скидка: <span>${(order.totalDiscount + extrasDiscount).toFixed(0)}</span>₽</li>`;
        summarydiscount += `</ul>`;  // Закрываем тег <ul>

        let summarytotal = `<ul class="order-total-discount">`;
        summarytotal += `<li>Со скидкой: <span>${(order.totalPriceWithDiscount + extrasTotalPrice).toFixed(0)}</span>₽</li>`;
        summarytotal += `</ul>`;  // Закрываем тег <ul>

        let summarytotalDop = `<ul class="order-total-discount">`;
        summarytotalDop += `<li>Доп.Услуги: <span>${order.totalDopuslugi}</span>₽</li>`;
        summarytotalDop += `</ul>`;  // Закрываем тег <ul>

        let summaryZakaz = `<ul class="order-total-zakaz">`;
        summaryZakaz += `<li>Сумма: <span>${(order.totalPriceWithoutDiscount + extrasTotalPrice + extrasDiscount).toFixed(0)}</span>₽</li>`;
        summaryZakaz += `</ul>`;  // Закрываем тег <ul>
        
        this.$total.innerHTML = summaryZakaz + summarydiscount + summarytotal + summarydelivery + summarytotalDop + summary;

        // Обновляем таблицу продуктов
        OrderTableProducts.update(order);
    }

    render() {
        //this.$actions.append(this.$buttonSave.render());
        /*
        this.$buttonSave.on('click', () => {
            OrderTableProducts.saveAsPDF();  // Вызываем метод сохранения PDF
        });
        */
        return this.$wrapper;
    }
}

export default new OrderTotal();
