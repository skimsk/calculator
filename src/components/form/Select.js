import Input from "./Input.js";

export default class Select extends Input {


    options = new Map();


    constructor(key) {
        super(key, 'select');

        this.$element.className = 'form-select';
    } 


    addOption(value, label = '', selected = false, disabled = false) {
        if (value !== undefined) {
            let option = document.createElement('option');
            option.value = value.toString();
            option.innerHTML = label.toString();
 
            option.selected = selected;
            option.disabled = disabled;

            this.options.set(option.value, option);
            this.$element.append(option);
        }
        
        return this;
    }

    addOptions(options = []) {
        options.forEach(option => {
            if (typeof option === 'object') {
                this.addOption(option.value, option.label, option.selected, option.disabled);
            }
        })
        return this;
    }

    setOptions(options = []) {
        this.options = new Map();
        this.$element.innerHTML = '';
        this.addOptions(options);

        return this;
    }

    setValue(key) {
        const option = this.getOption(key);
        if (option !== undefined) option.selected = true;
        return this;
    }

    getOptions() {
        return this.options;
    }

    getOption(key) {
        if (this.getOptions().has(key)) return this.options.get(key);
    }

    getValue() {
        for (const option of this.getOptions().values()) {
            if (option.selected) return option.value.toString();
        }
        return this.$element.value;
    }

    disableOption(key) {
        const option = this.getOption(key);
        if (option !== undefined) option.disabled = true;
        return this;
    }

    enableOption(key) {
        const option = this.getOption(key);
        if (option !== undefined) option.disabled = false;
        return this;
    }

    inputData() {
        return Object.assign(super.inputData(), {
            title: this.getOption(this.getValue()).innerText,
        });
    }

}