import User from "../../user/User.js";
import Order from './Order.js';
import Form from "../../components/form/Form.js";
import Select from "../../components/form/Select.js";
import InputText from "../../components/form/InputText.js";
import InputQuantity from "../../components/form/InputQuantity.js";
import InputPhone from "../../components/form/InputPhone.js";
import Radio from "../../components/form/Radio.js";
import Textarea from "../../components/form/Textarea.js";
import InputNumber from "../../components/form/InputNumber.js";
import InputValue from "../../components/form/InputCount.js";
import InputCount from "../../components/form/InputCount.js";


class OrderForm extends Form {
    

    constructor() {
        super('OrderForm')
        this.addCSSClass('form-order');

        // Добавляем поля в форму согласно ролям пользователей: монтажник или диллер
        switch (User.getRole()) {
            case 'employee':
                /*this.addField(this.inputShipment());*/
                /*this.addField(this.inputDeliveryAddress());*/
                this.addField(this.inputDeliveryDistance());
                this.addField(this.inputDeliveryCustom());
                this.addField(this.inputDeliveryCdek());
                /*this.addField(this.inputCustomerName());*/
                /*this.addField(this.inputCustomerPhone());*/
                /*this.addField(this.inputCustomerPickup());*/
                this.addField(this.inputBeznal());
                this.addField(this.inputCdek());
                this.addField(this.inputPickup());
                this.addField(this.inputDiscount());
                this.addField(this.inputComment());
                this.addField(this.inputDealID());
            break;
            case 'dealer':
                this.addField(this.inputShipment());
                this.addField(this.inputComment());
            break;   
        }
   
    }

    /**
     * Функции отрабатывающие на изменение данных в заказе
     */
    // слушаетль изменений в заказе
    update(order) {
        this.updateDeliveryDistanceInput(order);
        this.updateCustomerPickupInput(order);
        this.updateDeliveryAddressInput(order);
    }

    // Если есть монтаж в сетках в заказе то всегда показывается расстояние от мкад
    // Если монтажа нет то остается поле самовывоз и расстояние от 
    // мкад показывается уже в зависимости от самовывоза
    updateDeliveryDistanceInput(order) {
        const input = this.getInput('delivery_distance');
        if (input) {
            input.setValue(order.deliveryDistance).setDisabled(false);
            if (order.hasPickup() && !order.hasMontage()) {
                input.setDisabled(true);
            } else {
                input.setDisabled(false);
            }
        }
    }

    // Если есть монтаж, то пропадает самовывоз из формы заказа
    updateCustomerPickupInput(order) {
        const input = this.getInput('customer_pickup');
        if (input) input.setValue(order.hasPickup() ? 'on' : 'off').setDisabled(order.hasMontage());
    }

    // Если самовывоз установлен в значение "да" то пропадает поле адрес доставки
    updateDeliveryAddressInput(order) {
        const input = this.getInput('delivery_address');
        if (input) input.setDisabled(order.hasPickup());
    }

    /**
     * Основные поля формы
     */
    // Расстояние от МКАД(км):
    inputDeliveryDistance() {
        const input = new InputQuantity('delivery_distance', 0, 9999, 1);
        input.setLabel('Расстояние от МКАД (км.)');
        input.setDefault('0');

        input.on('change', function() {
            Order.setDeliveryDistance(this.getValue());  
        })

        this.addInput(input);
        return input;
    }

    //Доставка + спец.транспорт
    inputDeliveryCustom() {
        const input = new InputCount('delivery_custom', 0);
        input.setLabel('Дополнительные услуги');
        input.setDefault('0');

        input.on('change', function() {
            Order.setDeliveryCustom(this.getValue());  
        })

        this.addInput(input);
        return input;
    }

    inputDeliveryCdek() {
        const input = new InputCount('delivery_cdek', 0);
        input.setLabel('Тариф отправкой СДЭК');
        input.setDefault('0');

        input.on('change', function() {
            Order.setDeliveryCdek(this.getValue());  
        })

        this.addInput(input);
        return input;
    }

    // Самовывоз
    inputCustomerPickup() {
        const input = new Select('customer_pickup');
        input.setLabel('Самовывоз');
        input.addOption('off', 'Нет', true);
        input.addOption('on', 'Да');

        input.on('change', () => { 
            Order.setPickup(input.getValue() === 'on');
        })

        this.addInput(input);
        return input;
    }
    
    // Пункт отгрузки
    inputShipment() {
        const input = new Select('shipment');
        input.setLabel('Пункт отгрузки');

        input.addOption('Березовая роща д.1', 'Березовая роща д.1', true);

        this.addInput(input);
        return input;
    }

    // Адрес доставки
    inputDeliveryAddress() {
        const input = new InputText('delivery_address')
        input.setLabel('Адрес доставки')

        this.addInput(input);
        return input;
    }

    
    // Имя:
    inputCustomerName() {
        const input = new InputText('customer_name')
        input.setLabel('Имя')

        this.addInput(input);
        return input;
    }

    // Телефон:
    inputCustomerPhone() {
        const input = new InputPhone('customer_phone')
        input.setLabel('Телефон');

        this.addInput(input);
        return input;
    }

    // ИД Сделки:
    inputDealID() {
        const input = new InputText('deal_id')
        input.setLabel('Идентификатор сделки');
        input.on('change', () => {
            Order.setDealId(input.getValue());
        });
        this.addInput(input);
        return input;
    }


    // Скидка:
    inputDiscount() {
        const input = new Radio('discount');
        input.setLabel('Скидка');
        input.addItem('0', '0%', true);
        input.addItem('5', '5%');
        input.addItem('7', '7%');
        input.addItem('10', '10% ');
        input.addItem('15', '15%');
        input.setDefault('0');

        input.on('change', function() {
            Order.setDiscount(this.getValue());
        })

        this.addInput(input);
        return input;
    }

    // Доставка до СДЭК
    inputCdek() {
        const input = new Radio('cdek');
        input.setLabel('Доставка до СДЭК (+1700р)');
        input.addItem('0', 'Нет', true);  // По умолчанию нет доставки
        input.addItem('1700', 'Да');  // Стоимость доставки при выборе опции

        input.on('change', () => {
            console.log(`Cdek input value changed to: ${input.getValue()}`);
            Order.setCdek(input.getValue());
        this.updatePickupAndCdekState(); // Обновляем состояние радио кнопок
        });

        this.addInput(input);
        return input;
    }

    // Самовывоз
    inputPickup() {
        const input = new Radio('pickup');
            input.setLabel('Самовывоз');
            input.addItem('0', 'Нет', true);  // По умолчанию нет самовывоза
            input.addItem('1', 'Да');  // Устанавливаем значение, если самовывоз выбран

            input.on('change', () => {
                Order.setPickup(input.getValue());  // Устанавливаем значение самовывоза
                this.updatePickupAndCdekState(); // Обновляем состояние радио кнопок и таблицы
        });

        this.addInput(input);
        return input;
    }


// Обновление состояния полей в зависимости от выбранной опции
updatePickupAndCdekState() {
    const cdekInput = this.getInput('cdek');
    const pickupInput = this.getInput('pickup');

    if (cdekInput && pickupInput) {
        const cdekValue = cdekInput.getValue();
        const pickupValue = pickupInput.getValue();

        // Если выбрано 'Самовывоз', отключаем 'Доставка до СДЭК'
        if (pickupValue === '1') {
            cdekInput.setDisabled(true);
            cdekInput.setValue('0'); // Сбрасываем значение
        } else {
            cdekInput.setDisabled(false);
        }

        // Если выбрана 'Доставка до СДЭК', отключаем 'Самовывоз'
        if (cdekValue === '1700') {
            pickupInput.setDisabled(true);
            pickupInput.setValue('0'); // Сбрасываем значение
        } else {
            pickupInput.setDisabled(false);
        }

        console.log(`Updated Cdek and Pickup state. Cdek: ${cdekValue}, Pickup: ${pickupValue}`);
    }
}

    
    // Безнал:
    inputBeznal() {
        const input = new Radio('beznal');
        input.setLabel('Безнал / Счёт');
        input.addItem('0', 'Нет', true);
        input.addItem('10', 'Без НДС +10%');
        input.addItem('20', 'с НДС +20%');
        input.setDefault('0');

        input.on('change', function() {
            Order.setBeznal(this.getValue());
        })

        this.addInput(input);
        return input;
    }

    // Комментарий к заказу:
    inputComment() {
        const input = new Textarea('comment')
        input.setLabel('Комментарий к заказу');
        input.setRequired(true);

        input.on('change', () => {
            Order.setComment(input.getValue());
        });

        this.addInput(input);
        return input;
    }


    /**
     * Валидатор полей формы
     */
    validate() {
        for (const input of this.getInputs().values()) {
            switch (input.key) {
                case 'comment':
                    if (!input.isFilled()) return false;
                    break;
            }
        }
        return true;
    }



}


export default new OrderForm();

