import Input from "./Input.js";

export default class InputPhone extends Input {


    constructor(key) {
        super(key);

        this.$element.type = 'tel';
 
        this.$element.classList.add('form-control', 'has-validation');
        // this.on('keyup', () => {
        //     setTimeout(() => {
        //         this.setPhoneMask()
        //     }, 300)
        // })

        this.on('focus', this.setPhoneMask);
        this.on('keyup', this.setPhoneMask);
        this.on('blur', this.validate);

    }

    
    setPhoneMask() { 
        const value = this.getValueNumbers();

        // Define the different parts of the phone number
        const countryCode = '+7';
        const firstThreeDigits = `(${value.substring(1, 4)})`;
        const nextThreeDigits = value.substring(4, 7);
        const lastFourDigits = value.substring(7, 11);

        this.setValue(`${countryCode} ${firstThreeDigits} ${nextThreeDigits}${lastFourDigits}`);
    }

    getValueNumbers() {
        return this.getValue().replace(/\D/g, '');
    }

    validate() {
        this.setValid(true);
        if (this.getValueNumbers().length < 11) {
            this.setValue('').setValid(false);
        }

        return this;
    } 


}
