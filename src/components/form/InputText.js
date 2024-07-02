import Input from "./Input.js";

export default class InputText extends Input {

    constructor(key) {
        super(key);
        
        this.$element.type = 'text';

        this.$element.className = 'form-control';
    }


    getValue() {
        return this.$element.value.trim().toString();
    }

}