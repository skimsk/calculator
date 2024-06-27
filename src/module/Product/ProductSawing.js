import SawingData from "../../data/sawing.js";

export default class ProductSawing {

    constructor(productKey, formData) {
        if (!SawingData[productKey])  {
            throw new Error(`ProductSawing[constructor] Invalid SawingData ${productKey}`);
        }
        this.formData = formData;
        this.sawingData = SawingData[productKey];
    }

    calculate() {
        const width = this.formData.get('width')?.value;
        const height = this.formData.get('height')?.value;
        const result = {
            width: width ? width - this.getSawingValueByKey('width') : 0,
            height: height ? height - this.getSawingValueByKey('height') : 0,
            impost: width ? width - this.getSawingValueByKey('impost') : 0,
        };
 
        return result;
    }

    getSawingValueByKey(key) {
        const sawingItem = this.sawingData.find((item) => item.key === key);
        return sawingItem ? sawingItem.value : 0;
    }
}