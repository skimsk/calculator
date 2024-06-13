import Cart from "./Cart.js";

class CartExtras extends Cart {

    constructor() {
       super('extras');
    }

    totalPrice() {
        return this.getItems().reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    totalQuantity() {
        return this.getItems().reduce((acc, item) => acc + item.quantity, 0);
    }

}

export default CartExtras;
