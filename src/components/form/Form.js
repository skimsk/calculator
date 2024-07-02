export default class Form {


    key = null;

    fields = new Set();
    
    inputs = new Map();
    
    $form = document.createElement('form');


    constructor(key, action) {
        this.key = key || null;
        
        if (this.key !== null) {
            this.$form.id = this.key;
            this.$form.name = this.key;
        }
        this.$form.action = action || window.location.href;
        this.$form.autocomplete = 'off';

        this.$form.className = 'form';
    }
    

    addField(field) {
        if (field !== undefined) {
            if (typeof field.render === 'function') {
                this.fields.add(field);
                this.$form.append(field.render());
            } else {
                throw Error('Form.addField: Function "render" not found in field');
            }
        } else {
            console.log('Form.addField: field is undefined');
        }
        return this;
    }

    addFields(fields = []) {
        if (fields.length !== 0) {
            fields.forEach(field => {
                this.addField(field)
            })
        }
        return this;
    }

    addInput(input) {
        if (input instanceof Object && input.hasOwnProperty('key')) {
            this.inputs.set(input.key, input); 
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

    removeInput(key) {
        if (key != undefined) {
            const input = this.getInput(key);
            if (input !== undefined) this.getInputs().delete(key)
        }
        return this;
    }

    removeField(key) {
        if (key != undefined) {
            const field = this.getField(key);
            if (field !== undefined) {
                this.getFields().delete(field);
                this.$form.removeChild(field.render())
            }
        }
        return this;
    }

    getInputs() {
        return this.inputs;
    }

    getFields() {
        return this.fields;
    }

    getInput(key) {
        if (this.inputs.has(key)) return this.inputs.get(key);
    }

    getField(key) {
        for (const field of this.fields) {
            if (field.hasOwnProperty('key') && field.key === key) return field;
        }
    }

    getFormData() {
        const data = new Map();
        for (const input of this.getInputs().values()) {
            if (!input.isDisabled()) data.set(input.key, input.inputData());
        }
        return data;
    }

    validate() {
        console.log('Run Validate');    
    }

    reset() {
        for (const input of this.getInputs().values()) {
            input.reset();
            // input.dispatch('change');
        }
    }

    addCSSClass(name) {
        this.$form.classList.add(name);
        return this;
    } 

    removeCSSClass(name) {
        this.$form.classList.remove(name);
        return this;
    } 
    
    render() {
        return this.$form;
    }

}
