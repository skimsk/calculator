import Input from "./Input.js";

export default class InputCount extends Input {

    min = null;
    max = null;
    step = null;
    lang = 'en-US';

    constructor(key, min, max, step) {
        super(key);

        this.$element.type = 'value';
        this.$element.className = 'form-control';

        this.setMin(min);
        this.setMax(max);
        this.setStep(step);

        this.setLang(this.lang);

        this.on('change', this.validate.bind(this));
    }

    getValue() {
        return parseFloat(this.$element.value.toString());
    }

    setValue(value) {
        if (value !== undefined) {
            let val = parseFloat(value);
            if (val < 0) {
                val = 0;
            }
            if ((this.min === null || val >= this.min) && (this.max === null || val <= this.max)) {
                this.$element.value = val.toString();
            }
        }
        return this;
    }

    setLimits(min, max) {
        this.setMin(min).setMax(max);
        return this;
    }

    setMin(value) {
        if (value !== undefined) {
            this.min = parseFloat(value);
            this.$element.min = value.toString();
        }
        return this;
    }

    setMax(value) {
        if (value !== undefined) {
            this.max = parseFloat(value);
            this.$element.max = value.toString();
        }
        return this;
    }

    setStep(value) {
        if (value !== undefined) {
            this.step = parseFloat(value);
            this.$element.step = value;
        }
        return this;
    }

    setUnit(value) {
        if (value !== undefined) this.$label.append(' (' + value + ')');
        return this;
    }

    setLang(lang = 'en-US') {
        this.lang = lang;
        this.$element.lang = lang;
        return this;
    }

    isNumber(value) {
        return typeof value === 'number';
    }

    validate() {
        let value = this.getValue();

        if (isNaN(value) && this.min !== null) this.setValue(this.min.toString());

        if (value < 0) {
            this.setValue('0');
        } else if (this.min !== null && value < this.min) {
            this.setValue(this.min.toString());
        } else if (this.max !== null && value > this.max) {
            this.setValue(this.max.toString());
        }

        return this;
    }
}