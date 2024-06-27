import User from "../../../user/User.js";
import ProductForm from "../ProductForm.js";

export default class RamochnayaOptima extends ProductForm {


    constructor(config = {}) {
        super(config);
    }


    /* Функции для изменения полей (зависимости/поведение/события и т.д) */
    // Крепления
    fastings(field) {
        const inputMontage = this.getInput('montage'); // Поле "монтаж"
        const inputKomplekt = this.getInput('komplekt'); // Поле "ручки"

        if (inputMontage  && inputKomplekt) {
            field.on('change', function() {
                inputMontage.setDisabled(User.getRole() === 'dealer');
                inputKomplekt.setDisabled(true);
                switch (this.getValue()) {
                    case 'vnutrennie-zacepi': inputKomplekt.setDisabled(true); break;
                    case 'plungery': inputKomplekt.setDisabled(true); break;
                    case 'bezkrepleniya': inputKomplekt.setDisabled(true); break;
                    case 'z-krepleniya-m': inputKomplekt.setDisabled(false); break;
                    case 'z-krepleniya-p': inputKomplekt.setDisabled(false); break;
                }
            }) 
        }
    } 


}
