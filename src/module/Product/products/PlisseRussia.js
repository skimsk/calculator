import ProductForm from "../ProductForm.js";

export default class PlisseRussia extends ProductForm {


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
                    width.setMax('2000').validate();
                break; 
                default: 
                    width.setMax('4000').validate();
                break;   
            }
        });
    }
}