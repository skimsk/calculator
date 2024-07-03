import ProductForm from "../ProductForm.js";

export default class RulonnayaItalia extends ProductForm {


    constructor(config = {}) {
        super(config);
    }


    /* Функции для изменения полей (зависимости/поведение/события и т.д) */

    // Изменение максимальной высоты в зависимости от полотна
    canvas(field) {
        const height = this.getInput('height'); // Поле "высота"
        field.on('change', function() {
            switch (this.getValue()) {
                case 'antiporollet': 
                    height.setMax('1800').validate();
                break; 
                default: 
                    height.setMax('2500').validate();
                break;   
            }
        });
    }
    
    


}
