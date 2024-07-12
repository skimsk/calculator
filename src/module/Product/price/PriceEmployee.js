import Price from "./Price.js";

export default class PriceEmployee extends Price {


    constructor(productKey, formData, priceData) {
        super(formData, priceData);
        
        this.productKey = productKey;
    }

    calculate() {
        if (typeof this[this.productKey] === 'function') {
            return this[this.productKey]();
        } else {
            return this.Default();
        }
    }


    Default() {
        let total = 0;
        total += this.calcCanvasPrice();
        total += this.calcRAL();
        total += this.calcOptionsPrice();
        // Рассчет монтажа
        total += this.calcMontage(total);
        return total;
    }
    

    PlisseRussia() {
        let total = 0, priceM2 = 0;
        priceM2 += this.getInputPrice('opening').price;
        priceM2 += this.getInputPrice('install').price;
        total = this.calcAreaPrice(priceM2, priceM2);
        total += this.calcRAL();
        total += this.calcMontage(total);
        return total;
    }

    PlisseItalia() {
        let total = 0, priceM2 = 0;
        priceM2 += this.getInputPrice('opening').price;
        total = this.calcAreaPrice(priceM2, priceM2);
        total += this.calcRAL();                
        // Рассчет монтажа
        total += this.calcMontage(total);                   
        return total;
    }

    RazdvignayaProvedal() {
        let total = 0;
        total += this.calcCanvasPrice();
        total += this.calcOptionsPrice();
        total += this.calcRailPrice();
        total += this.calcRAL();
        // Рассчет монтажа
        total += this.calcMontage(total);
        return total;
    }

    RulonnayaPolsha() {
        let total = 0;
        total += this.calcCanvasPrice();
        total += this.calcOptionsPrice();
        total += this.calcRailPriceSlidors();
        total += this.calcRAL();
        // Рассчет монтажа
        total += this.calcMontage(total);
        return total;
    }
 
    RolletnayaItalia() {
        let total = 0;
        total += this.calcCanvasPrice();
        total += this.calcRAL();
        // Рассчет монтажа
        total += this.calcMontage(total);
        return total;
    }

}