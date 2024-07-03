import User from "./user/User.js";
import * as ModuleProduct from "./module/Product/index.js";
import * as ModuleExtras from "./module/Extras/index.js";
import * as ModuleOrder from "./module/Order/index.js";

// App load
document.addEventListener('DOMContentLoaded', () => {
    createCalculator();
})


function createCalculator(container = 'app') {
    const $app = document.getElementById(container);
    $app.innerHTML = `

        <div class="container">
                <div class="content">
                 <div class="logo"></div>
                 <div class="logo-text">Расчет стоимости заказа</div>
        </div>
            <ul class="nav nav-tabs mb-3">
                <li class="nav-item">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#ModuleProduct" type="button">Москитные сетки</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ModuleExtras" type="button">Комплектующие</button>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="ModuleProduct"></div>
            <div class="tab-pane fade" id="ModuleExtras"></div>   
        </div>
        <div class="module-order" id="ModuleOrder"></div>
    `
    $app.querySelector('#ModuleProduct').append(ModuleProduct.render());
    $app.querySelector('#ModuleExtras').append(ModuleExtras.render());
    $app.querySelector('#ModuleOrder').append(ModuleOrder.render());
}