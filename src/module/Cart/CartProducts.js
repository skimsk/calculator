import Cart from "./Cart.js";

class CartProducts extends Cart {

    constructor() {
       super('products');
    }

    totalPrice() {
        return this.getItems().reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    totalQuantity() {
        return this.getItems().reduce((acc, item) => acc + item.quantity, 0);
    }
    
    totalKPIInstaller() {
        return this.getItems().reduce((acc, item) => acc + (item.kpi.installer * item.quantity), 0);
    }

    totalKPIAssembler() {
        return this.getItems().reduce((acc, item) => acc + (item.kpi.assembler * item.quantity), 0);
    }
    

}

export default CartProducts;
