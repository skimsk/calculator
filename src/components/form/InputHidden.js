import Input from "./Input.js";

export default class InputHidden extends Input {

    constructor(key) {
        super(key);
        this.$element.type = 'hidden';
    }


    render() {
        return this.$element;
    }

}