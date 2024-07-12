import User from "../../../user/User.js";
import ProductForm from "../ProductForm.js";

export default class Ramochnaya25 extends ProductForm {


    constructor(config = {}) {
        super(config);
    }


    /* Функции для изменения полей (зависимости/поведение/события и т.д) */
    // Крепления
    fastings(field) {
        const inputMontage = this.getInput('montage'); // Поле "монтаж"
        const inputHandles = this.getInput('handles'); // Поле "ручки"
        const inputKomplekt = this.getInput('komplekt'); // Поле "ручки"

        if (inputMontage && inputHandles && inputKomplekt) {
            field.on('change', function() {
                inputMontage.setDisabled(User.getRole() === 'dealer');
                inputHandles.setDisabled(false);
                inputKomplekt.setDisabled(true);
                switch (this.getValue()) {
                    case 'plungery': inputHandles.setDisabled(true); break;
                    case 'plungery': inputKomplekt.setDisabled(false); break;
                    case 'vnutrennie-zacepi': inputKomplekt.setDisabled(true); break;
                    case 'z-krepleniya-m': inputKomplekt.setDisabled(false); break;
                    case 'z-krepleniya-p': inputKomplekt.setDisabled(false); break;
                }
            }) 
        }
    } 


}
 