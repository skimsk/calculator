import User from '../../user/User.js';
import FormData from '../../data/products.js';
import FieldGroup from '../../components/form/FieldGroup.js';
import Select from '../../components/form/Select.js';
import Button from '../../components/buttons/Button.js';
import InputQuantity from '../../components/form/InputQuantity.js';
import ProductForm from './ProductForm.js';
import ProductPrice from './ProductPrice.js';
import ProductSawing from './ProductSawing.js';
import KPIInstaller from './kpi/KPIInstaller.js';
import KPIAssembler from './kpi/KPIAssembler.js';
import DTOProduct from '../../dto/DTOProduct.js';
import Order from '../Order/Order.js';
import Price from './price/Price.js';


// Товары с индивидуальным поведением
import Ramochnaya25 from "./products/Ramochnaya25.js";
import RamochnayaOptima from "./products/RamochnayaOptima.js";
import RulonnayaItalia from "./products/RulonnayaItalia.js";
import PlisseItalia from "./products/PlisseItalia.js";
import PlisseRussia from "./products/PlisseRussia.js"
import Ramochnaya32 from "./products/Ramochnaya32.js";
import TrapeciyaStandart from "./products/TrapeciyaStandart.js";
import Arochnaya from "./products/Arochnaya.js"

const ProductKeys = {
    'Ramochnaya25': Ramochnaya25,
    'RamochnayaOptima': RamochnayaOptima,
    'RulonnayaItalia': RulonnayaItalia,
    'PlisseItalia': PlisseItalia,
    'PlisseRussia': PlisseRussia,
    'Ramochnaya32': Ramochnaya32,
    'TrapeciyaStandart': TrapeciyaStandart,
    'Arochnaya': Arochnaya,
}

const userRole = User.getRole();


/**
 * Инициализация компонентов модуля
 */
function render() {
    const $wrapper = document.createElement('div');
    $wrapper.className = 'module-container';
    $wrapper.innerHTML = `
        <div class="module-product-select">
            <div class="container">
                <div class="module-header">
                    <h2>Выберите конструкцию</h2>
                </div>
                <div id="ModuleProductSelector"></div>
            </div>
        </div>
        <div class="module-product-form">
            <div class="container" id="ModuleProductForm"></div>
        </div>
    `;

    // Селектор выбора конструкции
    const Selector = new Select('product');
    FormData.forEach((item) => {
        Selector.addOption(item.key, item.title, item.selected);
    })
    $wrapper.querySelector('#ModuleProductSelector').append(Selector.render());


    // Форма калькулятора полей конструкции
    Selector.on('change', function() {
        const Form = createForm(this.getValue());
        const formContainer = $wrapper.querySelector('#ModuleProductForm');
        formContainer.innerHTML = '';
        formContainer.append(Form.render());
    }).dispatch('change');

    return $wrapper;
}


// Обработчик формы товара (сетки) для добавления в корзину/заказ
function createOrderItem(form) {
    const productKey = form.key;
    const formData = form.getFormData();

    // Цена сетки с монтажом или без (считается сразу в ProductPrice)
    const productPriceInstance = new ProductPrice(productKey, userRole, formData);
    const productPrice = productPriceInstance.calculate();
    console.log('Цена продукции за 1 шт:', productPrice);

    // Итоговая цена с учётом стоимости монтажа
    const totalPrice = productPrice;

    // Получаем результаты расчетов
    const priceResults = productPriceInstance.priceStrategy.getResults();

    // Получаем отдельные значения из результатов
    const canvasPrice = priceResults.CanvasPrice;
    const ralPrice = priceResults.ralPrice;
    const ralMinPrice = priceResults.ralMinPrice;
    const MontagePrice = priceResults.MontagePrice;
    const OptionsPrice = priceResults.OptionsPrice;


    console.log('Цена за доп.покраску:', ralMinPrice);
    
    console.log('Цена за полотно:', canvasPrice);
    console.log('Цена за покраску:', ralPrice);
    console.log('Цена за монтаж', MontagePrice);
    console.log('Цена за опции:', OptionsPrice);

    // KPI Монтажника
    const kpiInstaller = new KPIInstaller(productKey, formData, totalPrice).calculate();
    console.log('KPI Монтажник:', kpiInstaller);

    // KPI Сборщика
    const kpiAssembler = new KPIAssembler(productKey, formData).calculate();
    console.log('KPI сборщик:', kpiAssembler);

    // Распил
    const productSawing = new ProductSawing(productKey, formData).calculate();
    console.log('Распил:', productSawing);

    // Создаем DTOProduct объект с дополнительными результатами
    const product = new DTOProduct({
        id: new Date().getTime(), 
        name: createProductName(form, totalPrice),
        quantity: formData.get('quantity').value,
        price: Math.round(totalPrice), // Округляем до целого числа
        montage: (formData.get('montage')?.value && formData.get('montage')?.value !== 'off'),
        ral: formData.get('frame_color')?.value === 'ral',
        kpi: {
            installer: Math.round(kpiInstaller),
            assembler: Math.round(kpiAssembler)
        },
        sawing: productSawing,
        canvasPrice: Math.round(canvasPrice), // Добавляем цену за полотно
        ralPrice: Math.round(ralPrice),   // Добавляем цену за раму
        ralMinPrice: Math.round(ralMinPrice),  
        MontagePrice: Math.round(MontagePrice),
        OptionsPrice:  Math.round(OptionsPrice),
    });

    console.log('Продукт:', product);

    return product;
}






// Установка формы
function createForm(key) {
    // Создаем форму из конфигурации:
    let form;
    FormData.forEach(function(config) {
        if (key !== undefined && config.key === key) {
            if (ProductKeys[config.key] !== undefined) { 
                form = new ProductKeys[config.key](config); 
            } else {
                form = new ProductForm(config);
            } 
        }  
    });

    // Добавляем поля для возможности заказа товара
    const actions = createFormActions(form);

    // Событие нажатия кнопки "Добавить в заказ"
    actions.button.on('click', () => {
        Order.addProduct(createOrderItem(form));
        // createOrderItem(form);
    })

    return form;
}

// Установка блока действий к форме товара
// с кнопкой "добавить в заказ" и с выбором количества сеток
function createFormActions(form) {
    const group = new FieldGroup('actions')
    const button = new Button('button_cart').setText('Добавить в заказ');
    const input = new InputQuantity('quantity');

    button.setClass('button button-cart');
    input.setLimits('1', '999').setValue('1').setLabel('Кол-во сеток')

    form.addInput(input);
    form.addField(group.addFields([input, button]));

    return { button, input };
}


// Генерирует полный текст товара по данным из формы сетки
function createProductName(form, price = 0) {
    const fields = [];
    for (const inputData of form.getFormData().values()) {
        // Исключаем количество сеток из текста
        if (inputData.key === 'quantity') continue;

        if (inputData.value instanceof Array) {
            let values = [];
            inputData.value.forEach(field => {
                values.push(`${field.label}`);
            });
            if (values.length > 0) fields.push(`${inputData.label}: (${values.join(', ')})`);
        } else {
            if (inputData.value) {
                fields.push(`${inputData.label}: ${inputData.title || inputData.value}`) 
            }  
        }
    }

    fields.push(`Цена: ${price} ₽`);

    return fields.join('. ');
}




export { render };