import DTOExtras from "./DTOExtras.js";
import DTOProduct from "./DTOProduct.js";

export default class DTOOrderBitrix {

 
    constructor(data = {}) {
        // Информация о заказе
        this.shipment = data.shipment || '';                    // Пункт отгрузки
        this.delivery_address = data.delivery_address || '';    // Адрес доставки
        this.delivery_distance = data.delivery_distance || 0;   // Расстояние от МКАД, км
        this.customer_name = data.customer_name || '';          // Имя
        this.customer_phone = data.customer_phone || '';        // Телефон
        this.pickup = data.pickup || false;                     // Самовывоз (нет/да)
        this.comment = data.comment || '';                      // Комментарий                     
        this.discount = data.discount || 0;                     // % Скидки        
        this.deal_id = data.deal_id || '';                      // ID Сделки    

        // Товары
        this.products = [];
        if (data.products && Array.isArray(data.products)) {
            data.products.forEach(product => {
                this.products.push(new DTOProduct(product));
            });
        }
        
        // Комплектующие
        this.extras = [];
        if (data.extras && Array.isArray(data.extras)) {
            data.extras.forEach(extras => {
                this.extras.push(new DTOExtras(extras));
            });
        }
        
        // Суммы
        this.total_kpi = {
            installer: data.kpi?.installer || 0,
            assembler: data.kpi?.assembler || 0,
        }
        this.total_price = data.totalPrice || 0;   
    }


}


// this.ral = data.ral || false;
// this.customer_pickup = data.customer_pickup;
// this.userRole = 'employee';
// this.totalKPIAssembler = data.kpi?.assembler || 0; 
// this.totalKPIInstaller = data.kpi?.installer || 0; 