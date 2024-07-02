import Input from "./Input.js";

export default class Textarea extends Input {


    constructor(key) {
        super(key, 'textarea');

        this.$element.classList.add('form-control');
    }


    getValue() {
        return this.$element.value.trim().toString();
    }



}