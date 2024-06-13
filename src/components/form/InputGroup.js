import Input from "./Input.js";

export default class InputGroup {


    key = null;

    inputs = new Map();

    disabled = false;

    $wrapper = document.createElement('div');

    $inputs = document.createElement('div');

    $label = document.createElement('div');

    
    constructor(key) {
        this.key = key || null;

        this.$wrapper.className = 'form-group form-group-' + this.key;

        this.$label.className = 'form-group-label';
           
        this.$inputs.className = 'input-group'; 
        
        this.$wrapper.append(this.$inputs)
    }


    addInput(input = {}) {
        if (input instanceof Input) {
            this.inputs.set(input.key, input)
            this.$inputs.append(input.render());
        }
        return this;
    }

    addInputs(inputs = []) {
        if (inputs.length !== 0) {
            inputs.forEach(input => {
                this.addInput(input)
            })
        }
        return this;
    }

    setRequired(flag) {
        if (typeof flag === 'boolean') {
            (flag !== false) ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
        }
        return this;   
    }

    setDisabled(flag) {
        if (typeof flag === 'boolean') {
            (flag !== false) ? this.$wrapper.classList.add('disabled') : this.$wrapper.classList.remove('disabled');
            this.disabled = flag;
        }
        return this;
    }

    getInput(key) {
        if (this.getInputs().has(key)) return this.inputs.get(key);
    }

    getInputs() {
        return this.inputs;
    }

    hide() {
        this.$wrapper.classList.add('is-hidden');
        return this;
    }

    show() {
        this.$wrapper.classList.remove('is-hidden');
        return this;
    }

    setVisible(flag) {
        if (typeof flag === 'boolean') {
            (flag !== false) ? this.hide() : this.show();
        }
        return this;
    }
    
    on(name, callback) {
        for (const input of this.getInputs().values()) {
            input.on(name, callback.bind(input))
        }
    }

    dispatch(name) {
        for (const input of this.getInputs().values()) {
            input.dispatch(name);
        }
        return this;
    }

    setLabel(text) {
        if (text !== undefined) {
            this.$label.innerHTML = text;
            this.$wrapper.prepend(this.$label);
        }
        return this;
    }

    isDisabled() {
        return this.disabled;
    }

    
    render() {
        return this.$wrapper;
    }
    

}