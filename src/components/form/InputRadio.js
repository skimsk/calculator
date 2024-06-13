import Input from "./Input.js";

export default class InputRadio extends Input {


    constructor(name, value, text, checked = false, disabled = false) {
        super(value);

        this.$wrapper = this.$label;

        this.$element.id = name + '_' + value;
        this.$element.type = 'radio';
        this.$element.name = name;
        this.$element.className = 'radio';

        this.$wrapper.className = 'input-radio';

        this.$label.setAttribute('for', this.$element.id);

        if (value !== undefined) this.setValue(value);
        
        this.setLabel(text);
        this.setChecked(checked);
        this.setDisabled(disabled);

        this.$wrapper.prepend(this.$element);
    }


    setChecked(flag) {
        if (typeof flag === 'boolean') this.$element.checked = flag;
        return this;
    }

    setLabel(text) {
        if (text !== undefined) {
            const $span = document.createElement('span');
            $span.innerHTML = text.toString();
            this.$wrapper.append($span);
        }
        return this;
    }

    isChecked() { 
        return this.$element.checked; 
    }


}