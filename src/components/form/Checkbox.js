import InputGroup from "./InputGroup.js";
import InputCheck from "./InputCheck.js";

export default class Checkbox extends InputGroup {


    default = '';

    required = false;
    

    constructor(key) {
        super(key);
    }


    addItem(value, text, checked = false, disabled = false) {
        this.addInput(new InputCheck(this.key, value, text, checked, disabled));
        return this;
    }

    getChecked() {
        const checked = new Set();
        for (const input of this.getInputs().values()) {   
            if (input.isChecked()) checked.add(input);
        }  
        
        return checked; 
    }

    getValue() {
        const values = [];
        for (const input of this.getChecked()) {   
            values.push(input.getValue());
        } 
        return values;  
    }

    setDefault(value = null) {
        if (value !== null) this.default = value;
        return this;
    }

    // setRequired(flag) {
    //     if (typeof flag === 'boolean') {
    //         (flag !== false) ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
    //         this.required = flag;
    //     } 
    //     return this;
    // }

    // isRequired() {
    //     return this.required;
    // }

    reset() {
        for (const input of this.getInputs().values()) {
            if (input.getValue() === this.default) input.setChecked(true);       
        }
        return this;
    }

    inputData() {
        const values = [];
        for (const input of this.getChecked()) {   
            values.push(input.inputData());
        }
        
        return {
            key: this.key,
            label: this.$label.innerText,
            value: values,
        }
    }



}
