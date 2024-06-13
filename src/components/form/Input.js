export default class Input {


    key = null;

    visible = true;

    disabled = false;

    required = false;

    placeholder = '';
    
    valid = true;

    default = '';

    $element = Object.create(null);

    $wrapper = document.createElement('div');

    $label = document.createElement('label');


    constructor(key, tag = 'input') {
        if (key === undefined) throw Error('Input.constructor.key is undefined');
        
        this.key = key;

        this.$wrapper.className = 'form-group';
        this.$wrapper.classList.add('form-group-' + this.key)

        this.$element = document.createElement(tag);
        this.$element.id = this.key;
        this.$element.name = this.key;

        this.$label.className = 'form-group-label';
        this.$label.setAttribute('for', this.key);

        this.$wrapper.append(this.$element);
    }
    
    setId(id) {
        this.$element.id = (id) ? id : this.key;
        this.$label.setAttribute('for', this.$element.id);
    }

    setValue(value) {
        if (value !== undefined) this.$element.value = value.toString();
        return this;
    }

    setDisabled(flag) {
        if (typeof flag === 'boolean') {
            (flag !== false) ? this.$wrapper.classList.add('disabled') : this.$wrapper.classList.remove('disabled');
            this.$element.disabled = flag;
            this.disabled = flag;
        }
        return this;
    }

    setRequired(flag) {
        if (typeof flag === 'boolean') {            (flag !== false) ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
            this.$element.required = flag;
            this.required = flag;
        }
        return this;
    }

    setPlaceholder(value) {
        if (value !== undefined) this.$element.placeholder = value.toString();
        return this;
    }

    setVisible(flag) {
        if (typeof flag === 'boolean') {
            (flag === false) ? this.hide() : this.show();
        }
        return this;
    }

    setValid(flag) {
        if (typeof flag === 'boolean') this.valid = flag;
        return this;
    }

    setDefault(value = null) {
        if (value !== null) this.default = value;
        return this;
    }

    reset() {
        this.setValue(this.default);
        return this;    
    }

    getElement() {
        return this.$element;
    }

    getValue() {
        return this.$element.value;
    }

    hide() {
        this.$wrapper.classList.add('is-hidden');
        this.visible = false;
        return this;
    }

    show() {
        this.$wrapper.classList.remove('is-hidden');
        this.visible = true;
        return this;
    }

    on(name = 'change', callback) {
        if (typeof callback === 'function') {
            this.$element.addEventListener(name, callback.bind(this));
        }
        return this;
    }

    dispatch(name) {
        this.$element.dispatchEvent(new Event(name));
        return this;
    }

    dispatchAll() {
        for (const eventHandler of this.eventHandlers) {
            this.$element.dispatchEvent(new Event(eventHandler.name));
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

    inputData() {
        return {
            key: this.key,
            label: this.$label.innerText,
            value: this.getValue(),
            // value: this.getValue() || undefined,
        }
    }

    isDisabled() {
        return this.disabled;
    }

    isRequired() {
        return this.required;
    }

    isFilled() {
        return !!this.getValue().toString().trim().length;
    }

    isValid() {
        return this.valid;
    }

    // // Метод для создания снимка текущих значений
    // getState() {
    //     return {
    //         min: this.min,
    //         max: this.max,
    //         step: this.step,
    //         lang: this.lang,
    //         value: this.getValue(),
    //         visible: this.visible,
    //         disabled: this.disabled
    //     };
    // }

    // // Метод для восстановления состояния из снимка
    // restoreState(snapshot) {
    //     this.setMin(snapshot.min);
    //     this.setMax(snapshot.max);
    //     this.setStep(snapshot.step);
    //     this.setValue(snapshot.value);
    //     this.setLang(snapshot.lang);
    //     this.setDisabled(snapshot.disabled);
    //     this.setVisible(snapshot.visible);
    // }


    render() {
        return this.$wrapper;
    }
    

} 
