import InputGroup from "./InputGroup.js";
import InputRadio from "./InputRadio.js";

export default class Radio extends InputGroup {


    default = '';

    required = false;


    constructor(key) {
        super(key);
    }


    addItem(value, text, checked = false, disabled = false) {
        this.addInput(new InputRadio(this.key, value, text, checked, disabled));
        return this;
    }
    
    getChecked() {
        for (const input of this.getInputs().values()) {   
            if (input.isChecked()) return input;
        }
    }

    getValue() {
        const checked = this.getChecked();
        return checked ? checked.getValue() : undefined;
    }

    setDefault(value = null) {
        if (value !== null) this.default = value;
        return this;
    }

    setRequired(flag) {
        if (typeof flag === 'boolean') {
            (flag !== false) ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
            this.required = flag;
        } 
        return this;
    }

    isRequired() {
        return this.required;
    }

    reset() {
        for (const input of this.getInputs().values()) {
            if (input.getValue() === this.default) input.setChecked(true);       
        }
        return this;
    }

    inputData() {
        const checked = this.getChecked();
        return {
            key: this.key,
            label: this.$label.innerText,
            title: (checked !== undefined) ? checked.$label.innerText : 'undefined',
            value: (checked !== undefined) ? checked.getValue() : 'undefined',
        }
    }


}