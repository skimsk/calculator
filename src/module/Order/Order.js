import CartExtras from "../Cart/CartExtras.js";
import CartProducts from "../Cart/CartProducts.js";
import PriceData from "../../data/order.js"
import User from "../../user/User.js";
import priceData from '../../data/price.js';


class Order {
    #userRole = null;
    #priceData = Object.create(null);
    #cartProducts = new CartProducts();
    #cartExtras = new CartExtras();
    #observers = new Set();

    constructor(user) {
        if (!user.getRole()) throw Error(`Order[constructor] User.getRole error`);        
        this.#userRole = user.getRole();

        if (!priceData[this.#userRole]) throw Error(`Order[PriceData] get userdata error ${this.#userRole}`);
        this.#priceData = priceData[this.#userRole];

        this.setDefaults();
    }


    /**
     * Москитные сетки
     */
    addProduct(item) {
        this.#cartProducts.addItem(item);
        return this.update();        
    }

    setProduct(id, item) {
        this.#cartProducts.setItem(id, item);
        return this.update();
    }

    deleteProduct(id) {
        this.#cartProducts.removeItem(id);
        return this.update();
    }

    getProducts() {
        return this.#cartProducts.getItems();       
    }

    
    /**
     * Комплектующие
     */
    setExtrasItem(id, item) {
        this.#cartExtras.setItem(id, item);
        return this.update();
    }

    addOrUpdateExtras(item) {
        if (this.#cartExtras.getItem(item.id)) {
            this.#cartExtras.updateItem(item.id, 'quantity', item.quantity);
        } else {
            this.#cartExtras.addItem(item);
        }
        return this.update();
    }

    deleteExtras(id) {
        this.#cartExtras.removeItem(id);
        return this.update();
    }

    getExtrasItem(id) {
        return this.#cartExtras.getItem(id);
    } 

    getExtras() {
        return this.#cartExtras.getItems();       
    }


    /**
     * Данные из формы заказа
     */
    setDiscount(percent) {
        if (percent !== undefined) this.discount = Number(percent) || 0;
        return this.update();   
    }

    setBeznal(percent) {
        if (percent !== undefined) this.beznal = Number(percent) || 0;
        return this.update();   
    }

    setCdek(amount) {
        if (amount !== undefined) this.cdek = Number(amount) || 0;  // Преобразуем amount в число или 0, если NaN
        return this.update();   // Обновляем состояние заказа
    } 

    setNdc(percent) {
        if (percent !== undefined) this.ndc = Number(percent) || 0;
        return this.update();   
    }

    setDeliveryDistance(distance) {
        this.deliveryDistance = distance;
        return this.update(); 
    }

    setDeliveryCdek(dostavkacdek) {
        this.deliveryCdek= dostavkacdek;
        return this.update(); 
    }

    setDeliveryCustom(distancecustom) {
        this.deliveryCustom= distancecustom;
        return this.update(); 
    }

    setPickup(pickup) {
        this.pickup = pickup;
        return this.update();
    }


    /**
     * Рассчеты
     */
    // Рассчет суммы всех дополнительных комплектующих в заказе
    calcTotalPriceExtras() {
        return this.#cartExtras.totalPrice();
    }

    // Рассчет суммы всех сеток в заказе
    calcTotalPriceProducts() {
        return this.#cartProducts.totalPrice();
    }

    // Рассчет скидки
    // price - цена товара
    calcDiscount(price = 0) {
        return Math.round(price - (price * this.discount / 100)); 
    }

    calcBeznal(price = 0) {
        return Math.round(price + (price * this.beznal / 100)); 
    }

    calcNdc(price = 0) {
        return Math.round(price + (price * this.ndc / 100)); 
    }

    calcCdek(price = 0) {
        return Math.round(price + this.cdek ); 
    }
    

    // Рассчет доставки 
    // min - минимальная цена доставки
    // mkad - цена доставки за 1 км за МКАД
    calcDelivery(min = 800, mkad = 80) {
        let delivery = 0;
        if (!this.pickup) delivery += min + (mkad * this.deliveryDistance);    
        
        return delivery;
    }

    // Рассчет покраски по RAL
    calcRAL() {
        let total = 0;
        if (this.ral === true) {
            // Получаем данные для RAL из импортированных данных
            const ral = priceData.employee.Ramochnaya25.frame_color.find(item => item.key === 'ral');
            const ralMin = priceData.employee.Ramochnaya25.frame_color.find(item => item.key === 'ral.min');
            
            // Получаем количество товаров в корзине
            const quantity = this.#cartProducts.totalQuantity();
    
            // Рассчитываем стоимость в зависимости от количества товаров
            if (quantity <= 2) {
                total += ralMin.price;  // Минимальная стоимость
            } else if (quantity > 2) {
                total += ralMin.price + ral.price * (quantity - 2);  // Минимальная стоимость плюс стоимость за дополнительное количество
            }
        }
    
        return total;
    }

    // Рассчет суммарной цены на все товары с учетом скидки и доставки
    // Минимальная сумма заказа  5000 р
    calcDelivery(min = 800, mkad = 80) {
        let delivery = 0;
        if (!this.pickup) delivery += min + (mkad * this.deliveryDistance);    
        return delivery;
    }

    calcSpecialDelivery() {
        let delivery_custom = 0;
        delivery_custom += this.deliveryCustom;    
        return delivery_custom;
    }

    calcDeliveryCdek() {
        let delivery_cdek = 0;
        delivery_cdek += this.deliveryCdek;    
        return delivery_cdek;
    }
    
    calcTotalPrice(min = 5000) {
        // Рассчет по умолчанию
        let total = this.calcTotalPriceProducts() + this.calcTotalPriceExtras();
        // Рассчет с покраской по RAL
        total += this.calcRAL();
        // + Рассчет с доставкой (если нет самовывоза)
        total += this.calcDelivery();
        total += this.calcCdek();
        // + Рассчет с спецтранспортом
        const specialDeliveryCost = this.calcSpecialDelivery();
        total += specialDeliveryCost;

        const DeliveryCdelCost = this.calcDeliveryCdek();
        total += DeliveryCdelCost;
    
        // Рассчет со скидкой только на товары и комплектующие
        total = this.calcDiscount(total);
        total = this.calcBeznal(total);
        total = this.calcNdc(total);
    
        if (total < min && !this.pickup) {
            total = min;
            total += specialDeliveryCost;
            total += DeliveryCdelCost;
        }
    
        return +total.toFixed(2);  // Округляем итоговую стоимость до двух знаков после запятой
    }
    
    // Рассчет суммарного KPI монтажника + КПИ доставки
    // min - минимальная оплата монтажнику, р.
    calcTotalKPIInstaller(min = 1000) {
        let total = 0, products = 0, extras = 0, delivery = 0;
    
        // Суммарное KPI у всех товаров
        products = this.#cartProducts.totalKPIInstaller();  
        // KPI 30% от суммы комплектующих 
        extras = this.calcTotalPriceExtras() * 30 / 100;
        // KPI за доставку
        delivery = this.calcDelivery(400);

        const summary = products + extras + delivery;
        total += (summary <= min) ? min : summary; 
         
        return total;
    }

    // Рассчет суммарного KPI сборщика
    calcTotalKPIAssembler() {
        return this.#cartProducts.totalKPIAssembler();
    }


    /**
     * Уведомление наблюдателей об изменениях в заказе
     */
    update() {
        if (this.isEmpty()) {
            this.setDefaults();
        } else {
            this.montage = this.hasMontage();
            this.ral = this.hasRAL();
            if (this.montage) this.pickup = false;
            
            // Обновление массива товаров
            this.products = this.getProducts();
            
            // Обновление массива комплектующих
            this.extras = this.getExtras();
            
            // Сумма KPI монтажника не учитывается если есть самовывоз
            this.kpi.installer = (!this.pickup) ? this.calcTotalKPIInstaller() : 0;
            
            // Сумма KPI установщика
            this.kpi.assembler = this.calcTotalKPIAssembler();
            
            // Сумма заказа
            this.totalPrice = this.calcTotalPrice();
        }

        this.broadcast();
        return this;
    }


    /**
     * Дополнительные функции
     */
    // Сброс атрибутов к значениям по умолчанию
    setDefaults() {
        this.deliveryDistance = 0;                  // Расстояние доставки (км)
        this.deliveryCustom = 0;                  // Доставка и спец.транспорт
        this.deliveryCdek = 0;                  // Тариф ТК СДЭК
        this.specificalMontage = 0;             //Стоимость работ по специфическому монтажу
        this.discount = 0;                          // Скидка (%)
        this.beznal = 0;                          //Безнал
        this.ndc = 0;                          //Безнал
        this.cdek = 0;                          //Доставка до ТК СДЭК отгрузка
        this.pickup = this.#userRole === 'dealer';  // Самовывоз (true/false) У диллеров самовывоз по умолчанию "Да" 
        this.montage = false;                       // Монтаж (true/false)
        this.ral = false;                           // RAL (true/false)
        this.products = [];                         // Массив продуктов
        this.extras = [];                           // Массив комплектующих
        this.kpi = {
            installer: 0,                           // Суммарное KPI Монтажника 
            assembler: 0                            // Суммарное KPI Сборщика 
        }
    }

    // Проверка, пустой ли заказ
    isEmpty() {
        const items = [...this.#cartProducts.getItems(), ...this.#cartExtras.getItems()];
        return !Boolean(items.length);
    }

    // Есть ли хоть одна сетка в заказе с монтажом (true/false)
    hasMontage() {
        return this.getProducts().some(item => item.montage); 
    }

    // Есть ли хоть одна сетка в заказе с покраской по RAL (true/false)
    hasRAL() {
        return this.getProducts().some(item => item.ral); 
    }

    // Есть ли самовывоз? (true/false)
    hasPickup() {
        return this.pickup;    
    }

    // Роль пользователя
    getUserRole() {
        return this.#userRole; 
    }

    // Полная очистка заказа
    clear() {
        this.#cartProducts.clear();
        this.#cartExtras.clear();
        return this.update();
    }

 
    /**
     * Регистрация наблюдателей (обсерверов)
     */
    broadcast() {
        for (const observer of this.#observers) {
            observer.update(this);    
        }
        return this; 
    }

    registerObserver(observer) {
        this.#observers.add(observer);
        return this;
    }

    unregisterObserver(observer) {
        if (this.#observers.has(observer)) this.#observers.delete(observer);
        return this;
    }

}

export default new Order(User);
