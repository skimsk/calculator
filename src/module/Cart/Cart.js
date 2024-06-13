export default class Cart {


    constructor(key) {
        this.key = 'cart.' + key;

        if (localStorage.getItem(this.key) === null) 
            localStorage.setItem(this.key, '[]'); 
    }

    getItems() {
        return JSON.parse(localStorage.getItem(this.key));
    }

    getItem(id) {
        return this.getItems().find(item => item.id?.toString() === id.toString());
    } 

    addItem(item) {
        const items = this.getItems();
        items.push(item);
        localStorage.setItem(this.key, JSON.stringify(items));
        return this;
    }

    setItems(items) {
        localStorage.setItem(this.key, JSON.stringify(items));
        return this;
    }

    setItem(id, item) {
        const items = this.getItems();
        const index = items.findIndex(item => item.id === id);
    
        if (index !== -1) {
          items[index] = item;
          this.setItems(items);
        }
    
        return this;
    }

    updateItem(id, name, value) {
        const items = this.getItems();
        const index = items.findIndex(item => item.id === id);
    
        if (index !== -1) {
          items[index][name] = value;
          this.setItems(items);
        }
    
        return this;
    }

    removeItem(id) {
        const items = this.getItems();
        if (id !== undefined && items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                const itemID = items[i].id;
                if (itemID !== undefined && itemID.toString() === id.toString()) {
                    items.splice(i, 1);
                }
            }
            this.setItems(items);   
        }
        return this;
    }

    clear() {
        this.setItems([]);
        return this;
    }

    itemsCount() {
        return this.getItems().length;
    }


}
