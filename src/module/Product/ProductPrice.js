import PriceData from "../../data/price.js";
import PriceDealer from "./price/PriceDealer.js";
import PriceEmployee from "./price/PriceEmployee.js";

export default class ProductPrice {

    constructor(productKey, userRole, formData) {
        if (!PriceData[userRole] || !PriceData[userRole][productKey])  {
            throw new Error(`ProductPrice[constructor] Invalid PriceData ${productKey}`);
        }

        this.productKey = productKey;  // Добавляем productKey в класс
        const priceData = PriceData[userRole][productKey];

        if (userRole === 'employee') {
            this.priceStrategy = new PriceEmployee(productKey, formData, priceData);
        } else if (userRole === 'dealer') {
            this.priceStrategy = new PriceDealer(productKey, formData, priceData);
        } else {
            throw new Error(`Unknown user: ${userRole}`);
        }
    }

    calculate() {
        return this.priceStrategy.calculate();
    }

    calcTotalPrice(order) {
        // Передаем productKey из текущего объекта ProductPrice
        return order.calcTotalPrice(this.productKey);
    }
}
