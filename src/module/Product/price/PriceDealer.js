import Price from "./Price.js";

export default class PriceDealer extends Price {

    
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
        total += this.calcCanvasFramePrice();        
        total += this.calcOptionsPrice();
        return total;
    }

    PlisseRussia() {
        let total = 0, priceM2 = 0;
        priceM2 += this.getInputPrice('opening').price;
        priceM2 += this.getInputPrice('install').price;
        total = this.calcAreaPrice(priceM2, priceM2);
        return total;
        return total;
    }

    PlisseItaly() {
        let total = 0, priceM2 = 0;
        priceM2 += this.getInputPrice('opening').price;
        priceM2 += this.getInputPrice('install').price;
        total = this.calcAreaPrice(priceM2, priceM2);
        return total;
    }

    RazdvignayaProvedal() {
        let total = 0;
        total += this.calcCanvasFramePrice();        
        total += this.calcOptionsPrice();
        total += this.calcRailPrice();
        return total;
    }
 
    RolletnayaItalia() {
        let total = 0;
        total += this.calcCanvasFramePrice();
        return total;
    }

    RulonnayaPolsha() { 
        let total = 0, priceM2 = 6000, priceM2Min = 6000;
        total += this.calcAreaPrice(priceM2, priceM2Min);
        return total;
    }

}