class OrderToggler {

    constructor(wrapper) {
        this.wrapper = wrapper;
    }
    
    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
    update(order) {
        (!order.isEmpty()) ? this.wrapper.classList.remove('is-hidden') : this.wrapper.classList.add('is-hidden');
    }
}

export default OrderToggler;