import InputNumber from "./InputNumber.js";

export default class InputQuantity extends InputNumber {


    $buttonPlus = document.createElement('button');

    $buttonMinus = document.createElement('button');

    $inputWrapper = document.createElement('div');


    constructor(key, min, max, step) {
        super(key, min, max, step);

        this.$inputWrapper.className = 'input-quantity';

        this.$buttonPlus.type = 'button';
        this.$buttonMinus.type = 'button';
        this.$buttonPlus.className = 'iq-plus';
        this.$buttonMinus.className = 'iq-minus';
        
        this.$buttonPlus.addEventListener('click', this.increment.bind(this));
        this.$buttonMinus.addEventListener('click', this.decrement.bind(this));

        this.$inputWrapper.append(this.$buttonMinus, this.$element, this.$buttonPlus);
        this.$wrapper.append(this.$inputWrapper);
    }


    increment() {
        const step = (this.step) ? this.step : 1;
        this.setValue(this.getValue() + step);
        this.dispatch('change');
    }

    decrement() {
        const step = (this.step) ? this.step : 1;
        this.setValue(this.getValue() - step);
        this.dispatch('change');
    }



    render() {
        return this.$wrapper;
    }

}