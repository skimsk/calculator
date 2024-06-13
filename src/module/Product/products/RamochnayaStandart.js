import User from "../../../user/User.js";
import ProductForm from "../ProductForm.js";

export default class RamochnayaStandart extends ProductForm {


    constructor(config = {}) {
        super(config);
    }


    /* Функции для изменения полей (зависимости/поведение/события и т.д) */
    // Крепления
    fastings(field) {
        const inputMontage = this.getInput('montage'); // Поле "монтаж"
        const inputHandles = this.getInput('handles'); // Поле "ручки"
        if (inputMontage && inputHandles) {
            field.on('change', function() {
                inputMontage.setDisabled(User.getRole() === 'dealer');
                inputHandles.setDisabled(false);
                switch (this.getValue()) {
                    case 'vnutrennie-zacepi': inputMontage.setDisabled(true); break; // Внутренние зацепы
                    case 'plungery': inputHandles.setDisabled(true); break; // Плунжер
                }
            }) 
        }
    } 


}
