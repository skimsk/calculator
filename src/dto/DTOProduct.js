export default class DTOProduct {

    
    constructor(data = {}) {
        this.id = data.id || new Date().getTime();
        this.name = data.name || '';
        this.quantity = data.quantity || 1;
        this.price = data.price || 0;
        this.montage = data.montage || false;
        this.ral = data.ral || false;
        this.kpi = Object.assign({ installer: 0, assembler: 0 }, data.kpi);
        this.sawing = Object.assign({ width: 0, height: 0, impost: 0 }, data.sawing);
        this.canvasPrice = data.canvasPrice;
        this.ralPrice = data.ralPrice;
        this.ralMinPrice = data.ralMinPrice;
        this.OptionsPrice = data.OptionsPrice;
        this.MontagePrice = data.MontagePrice;
    }

}