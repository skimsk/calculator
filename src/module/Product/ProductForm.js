import User from "../../user/User.js";
// Data
import Polotna from "../../data/polotna.js"
// Default
import Form from "../../components/form/Form.js";
import FieldGroup from "../../components/form/FieldGroup.js";
import Select from "../../components/form/Select.js";
import Checkbox from "../../components/form/Checkbox.js";
import Radio from "../../components/form/Radio.js";
import InputNumber from "../../components/form/InputNumber.js";
import InputText from "../../components/form/InputText.js";
import Textarea from "../../components/form/Textarea.js";
import InputHidden from "../../components/form/InputHidden.js";
// Custom
import InputQuantity from "../../components/form/InputQuantity.js";
import InputRAL from "./form/InputRAL.js";
import OffCanvasRAL from "./form/OffCanvasRAL.js";


export default class ProductForm extends Form {


    constructor(config = {}) {
        super(config.key || 'ProductForm')

        this.$form.classList.add('form-product');

        // Добавляем в форму поле с текстовым названием товара
        this.addField(this.createHiddenTitle(config.title));

        // Генератор полей формы согласно конфигурации
        try {
            config.form.fields.forEach((field) => {
                if (field.type === 'group') {
                    this.addField(this.createGroup(field));
                } else {
                    this.addField(this.createInput(field));
                }
            })
        } catch (error) {
            console.log('Ошибка конфигурации полей конструкции', error)
        }


        this.addField(this.createInputSpesmontaz());
        
        this.addField(this.createInputKomnata());

        // Добавляем в форму поле "комментарий"
        this.addField(this.createInputComment())

        // Добавляем в форму поле "монтаж"
        //this.addField(this.createInputMontage());


        // Добавляем в форму модальное окно с "RAL" цветами
        this.addField(this.createModalRAL());

        // Авто-вызов функций(совпадающих с ключом поля) для изменения поведения полей формы
        this.setInputChanges();
    }


    /** 
     * Функции для изменения полей (зависимости/поведение/события и т.д)
     * function(field) {field.on('change', function(this, e) {}}
     * Где:
     * - this - непосредственно инстанс объекта где произошло событие [Input:class]
     * - field - поле [InputGroup:class, Input:class etc]
     */

    // Полотно -> цвета полотна
    // У каждого полотна есть разные цвета, которые грузятся из конфигурации polotna.js
    // Ловим изменения поля полотна и подгружаем нужный список цветов
    canvas(field) {
        const canvasColors = this.getInput('canvas_color');
        if (canvasColors !== undefined) {
            field.on('change', function(e) {
                const key = this.getValue();
                if (Polotna.hasOwnProperty(key)) {
                    canvasColors.setOptions(Polotna[key]);
                }
            })
        } 
    }

    // Цвет рамки
    frame_color(field) {
        const inputRAL = this.getInput('ral');

        if (inputRAL !== undefined) {
            field.on('change', function(e) {
                inputRAL.setDisabled(false);
                if (this.getValue() === 'ral') {
                    inputRAL.setDisabled(false);
  
                    // Bootstrap events accessibility fix:
                    //const button = inputRAL.getButton().getElement();
                    //button.dispatchEvent(new Event('click'));
                }
            }) 
        }
    }  

    // Установка (Показываем только монтажникам) (type Select)
    createInputSpesmontaz() {
        const input = new Textarea('mogtagespes');
        input.setLabel('Монтажные работы');
        input.setPlaceholder('Укажите сумму');
    
        // Скрыть поле по умолчанию
        input.setVisible(false);
    
        this.addInput(input);
        return input;
    }
    
    montage(field) {
        if (User.getRole() === 'employee') {
            field.addOption('easy', 'Монтаж', true);
            field.addOption('hard', 'Сложный монтаж');
            field.addOption('specific', 'Специфический монтаж');
            field.addOption('off', 'Без монтажа');
    
            const inputSpesmontaz = this.getInput('mogtagespes'); // Поле ввода стоимости монтажа
    
            field.on('change', function() {
                if (this.getValue() === 'specific') {
                    inputSpesmontaz.setVisible(true); // Показываем поле ввода стоимости монтажа
                } else {
                    inputSpesmontaz.setVisible(false); // Скрываем поле ввода стоимости монтажа
                }
            });
        } else {
            field.setVisible(false);
            field.setDisabled(true);
        }
    }    
    


    /** 
     * Нестандартные поля  
     */
    
    // Цвета полотна в зависимости от типа полотна 
    createCanvasColors(config = {}) {
        const input = new Select(config.key)
        input.setLabel(config.label)
        input.setRequired(config.required)

        // Устанавливаем цвета полотна согласно конфигурации и текущего полотна
        const canvasKey = this.getInput('canvas').getValue();
        if (Polotna.hasOwnProperty(canvasKey)) {
            Polotna[canvasKey].forEach(item => {
                input.addOption(item.value, item.label, item.selected)
            })
        }

        return input;
    }

    // Поле для ввода кода цвета RAL 
    createInputRAL(config = {}) {
        const input = new InputRAL(config.key, '1000', '9023'); // Ключ, мин, макс
        input.setLabel(config.label);
        input.setDisabled(true);
        input.setValue('1000');
        input.setVisible(config.visible);

        return input;
    }

    // Модальное окно с выбором рал цветов, добавляется просто как field в конец формы 
    // Поведение не как у Input по этому события функциями повесить нельзя
    // Все поведение пишется при создании
    createModalRAL() {
        const field = new OffCanvasRAL('ral_modal')
        field.setTitle('Выберите цвет по шкале RAL');
        // field.setVisible(true);

        // Обработка клика по элементу списка RAL цветов в модальном окне
        const inputRAL = this.getInput('ral');
        if (inputRAL !== undefined) {
            const buttonRAL = inputRAL.getButton();
            buttonRAL.setClass('ral-' + inputRAL.getValue());

            field.onClickItem(function() {
                inputRAL.setValue(this.dataset.code);
                buttonRAL.setClass('ral-' + this.dataset.code);
                // С валидацией
                inputRAL.validate();
            }) 
            
            inputRAL.on('change', function() {
                buttonRAL.setClass('ral-' + this.getValue());
            })
        }

        return field;    
    }

    // Комментарий к изделию
    createInputComment() {
        const input = new Textarea('comment');
        input.setLabel('Комментарий к изделию');
        input.setPlaceholder('Текст комментария');

        this.addInput(input);
        return input;
    }

    // Тип комннаты
    createInputKomnata() {
        const input = new Textarea('typeroom');
        input.setLabel('Название помещения');
        input.setPlaceholder('Введите название');

        this.addInput(input);
        return input;
    }

    // Скрытое поле с названием товара
    createHiddenTitle(text) {
        const input = new InputHidden('title');
        input.setValue(text);
        input.setLabel('Тип конструкции');

        this.addInput(input);
        return input; 
    }


    /**
     * Конструкторы полей формы
     */ 

    // Input
    createInput(config = {}) {
        let input = Object.create(null);
        if (config.type !== undefined) {
            switch (config.type) {
                case 'select': input = this.createSelect(config); break;
                case 'checkbox': input = this.createCheckbox(config); break;
                case 'number': input = this.createInputQuantity(config); break;
                case 'radio': input = this.createRadio(config); break;
                // case 'text': input = this.createInputText(config); break;
                // case 'textarea': input = this.createTextarea(config); break;
                
                // Кастомные не стандартные поля
                case 'canvas_color': input = this.createCanvasColors(config); break;
                case 'ral': input = this.createInputRAL(config); break;
            } 
            this.addInput(input); 
        }
        
        return input;
    }

    // FieldGroup
    createGroup(config = {}) {
        const group = new FieldGroup(config.key)
        group.setLabel(config.label)
        config.inputs.forEach(input => {
            group.addField(this.createInput(input))
        })

        return group;
    }

    // Select
    createSelect(config = {}) {
        const input = new Select(config.key);
        input.setLabel(config.label);
        input.setRequired(config.required);
        input.setVisible(config.visible);
        input.setDisabled(config.disabled);
        if (config.hasOwnProperty('items')) {
            config.items.forEach(item => {
                input.addOption(item.value, item.label, item.selected);
            })
        }

        return input;
    }

    // Checkbox
    createCheckbox(config = {}) {
        const field = new Checkbox(config.key)
        field.setLabel(config.label)
        field.setRequired(config.required)
        field.setDisabled(config.disabled);
        if (config.hasOwnProperty('items')) {
            config.items.forEach(item => {
                field.addItem(item.value, item.label, item.checked, item.disabled);
            })
        }

        return field;
    }

    // Input Number
    createInputNumber(config = {}) {
        const input = new InputNumber(config.key, config.min, config.max, config.step);
        input.setLabel(config.label);
        input.setRequired(config.required);
        input.setDisabled(config.disabled);
        input.setValue(config.value);
        input.setUnit(config.unit);
        return input;
    }

    // Input number plus-minus
    createInputQuantity(config = {}) {
        const input = new InputQuantity(config.key, config.min, config.max, config.step);
        input.setLabel(config.label);
        input.setRequired(config.required);
        input.setDisabled(config.disabled);
        input.setValue(config.value);
        input.setUnit(config.unit);
        return input;
    }

    // Radio
    createRadio(config = {}) {
        const field = new Radio(config.key)
        field.setLabel(config.label)
        field.setRequired(config.required)
        field.setDisabled(config.disabled);
        if (config.hasOwnProperty('items')) {
            config.items.forEach(item => {
                field.addItem(item.value, item.label, item.checked, item.disabled);
            })
        }

        return field;
    }

    // // Input text
    // createInputText(config = {}) {
    //     const input = new InputText(config.key);
    //     input.setLabel(config.label);
    //     input.setRequired(config.required);
    //     input.setPlaceholder(config.placeholder);

    //     return input;
    // }

    // // Textarea
    // createTextarea(config = {}) {
    //     const input = new Textarea(config.key);
    //     input.setLabel(config.label);
    //     input.setPlaceholder(config.placeholder);
    //     input.setRequired(config.required);

    //     return input;
    // }

  
    // Применение изменений для input поля по ключу "key" 
    // Автозапуск функции с именем ключа key() если создана
    setInputChanges() {
        for (const input of this.getInputs().values()) {
            // Проверка наличия функции обработчика для поля
            if (input.hasOwnProperty('key')) {
                // Вызов функции обработчика
                if (typeof this[input.key] === 'function') {
                    this[input.key](input);
                }
            }
        }
    }



    /**
     * 
     */
    // getPrice() {
    //     console.log(this);
    // }
}