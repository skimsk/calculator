import ProductForm from "../ProductForm.js";

export default class PlisseItalia extends ProductForm {


    constructor(config = {}) {
        super(config);
    }


    /* Функции для изменения полей (зависимости/поведение/события и т.д) */

    // Изменение максимальной ширины в зависимости от типа открывания
    opening(field) {
        const width = this.getInput('width'); // Поле "ширина"
        field.on('change', function() {
            switch (this.getValue()) {
                case 'vstrechnoe': 
                case 'reversivnoe': 
                    width.setMax('4000').validate();
                break; 
                default: 
                    width.setMax('2000').validate();
                break;   
            }
        });
    }
    /*
    // Изменение максимальной высоты в зависимости от полотна
    canvas(field) {
        const height = this.getInput('height'); // Поле "высота"
        field.on('change', function() {
            switch (this.getValue()) {
                case 'antivandal-gray': 
                    height.setMax('2800').validate();
                break;
                case 'maxivision-black': 
                    height.setMax('2400').validate();
                break; 
                default: 
                    height.setMax('3000').validate();
                break;   
            }
        });
    }
        */
}