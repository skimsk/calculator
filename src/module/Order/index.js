import Order from "./Order.js";
import ButtonClear from "./components/ButtonClear.js";
import OrderTableProducts from "./OrderTableProducts.js";
import OrderTableExtras from "./OrderTableExtras.js";
import OrderForm from "./OrderForm.js";
import OrderTotal from "./OrderTotal.js";
import OrderToggler from "./components/OrderToggler.js";

const $wrapper = document.createElement('div');
$wrapper.className = 'module-container is-hidden';

// Регистрация наблюдателей для компонентов модуля
Order.registerObserver(new OrderToggler($wrapper));
Order.registerObserver(OrderTableProducts);
Order.registerObserver(OrderTableExtras);
Order.registerObserver(OrderForm);
Order.registerObserver(OrderTotal);

Order.update();


/**
 * События модуля
 */
ButtonClear.on('click', () => { 
    Order.clear();      // Очистка данных заказа
    OrderForm.reset();  // Очистка формы заказа на значения по умолчанию
});


function render() {
    $wrapper.innerHTML = `
        <div class="module-order-table">
            <div class="container">
                <div class="module-header" id="OrderHeader">
                    <h2>Ваш заказ</h2>
                </div>
                <div class="table-responsive" id="OrderTableProducts"></div>
                <div class="table-responsive" id="OrderTableExtras"></div>
            </div>
        </div>
        <div class="module-order-form">
            <div class="container">
                <div class="module-header">
                    <h2>Дополнительно в заказ</h2>
                </div>
                <div id="OrderForm"></div>
            </div>
        </div>
        <div class="module-order-total fixed" id="OrderTotal"></div> 
    `;
    
    $wrapper.querySelector('#OrderHeader').append(ButtonClear.render());
    $wrapper.querySelector('#OrderTableProducts').append(OrderTableProducts.render());
    $wrapper.querySelector('#OrderTableExtras').append(OrderTableExtras.render());
    $wrapper.querySelector('#OrderForm').append(OrderForm.render());
    $wrapper.querySelector('#OrderTotal').append(OrderTotal.render());

    return $wrapper;
}

export { render }