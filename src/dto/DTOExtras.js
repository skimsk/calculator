export default class DTOExtras {
 
    constructor(data = {}) {
        this.id = data.id || new Date().getTime();
        this.name = data.name || '';
        this.quantity = data.quantity || 1;
        this.price = data.price || 0;
    }

}