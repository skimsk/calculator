import Button from "../../../components/buttons/Button.js";
import InputNumber from "../../../components/form/InputNumber.js";

export default class InputRAL extends InputNumber {

    
    button = new Button('ral_select');

    $inputWrapper = document.createElement('div');

    constructor(key, min, max) {
        super(key, min, max);
 
        this.$inputWrapper.className = 'form-group-inputs';

        //this.button.setText('');
        this.button.removeClass('button');
        this.button.getElement().dataset.bsToggle = 'offcanvas';
        this.button.getElement().dataset.bsTarget = '#offcanvas-ral_modal';

        this.$inputWrapper.append(this.$element, this.button.render());
        this.$wrapper.append(this.$inputWrapper);
    }


    // validate() {
    //     super.validate();

    //     console.log(77777);
    // }


    getButton() {
        return this.button;
    }


    
}