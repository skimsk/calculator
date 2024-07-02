import KPIData from '../../../data/kpi.js'

export default class KPIInstaller {

    constructor(productKey, formData, productPrice = 0) {
        this.productKey = productKey;
        this.productPrice = productPrice;
        this.formData = formData;
        if (!KPIData.installer || !KPIData.installer[this.productKey])  {
            throw new Error(`KPIInstaller[constructor] Invalid KPIData ${productKey}`);
        }
        this.kpiData = KPIData.installer[this.productKey];
    }

    // КПИ сетки считается в любом случае вне зависимости есть монтаж или нет
    calculate() {
        let KPI = 0;
        if (typeof this[this.productKey] === 'function') {
            KPI = this[this.productKey]();
        } else {
            KPI = this.Default();
        }    
        return KPI;
    }


    Default() {
        let kpi = 0;
        const montageKey = this.formData.get('montage')?.value; // montageKey = (off || easy || hard)
        const kpiData = this.kpiData.find(item => item.key === montageKey);
        if (kpiData) {
            kpi += kpiData.fix;
            kpi += Math.round(this.productPrice * kpiData.percent / 100);         
        } 
        
        return kpi; 
    }

    Ramochnaya25() {
        let kpi = 0;
        kpi += this.Default();
        if (kpi === 0) kpi += Math.round(this.productPrice * 15 / 100);
        return kpi;
    }
    
    VstavnayaVSN() {
        let kpi = 0;
        const kpiData = this.kpiData.find(item => item.key === 'easy');
        if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
        return kpi;
    }

    RamochnayaAlumSN() {
        let kpi = 0;
        const kpiData = this.kpiData.find(item => item.key === 'easy');
        if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
        return kpi;
    }

    RamochnayaUSN() {
        let kpi = 0;
        const kpiData = this.kpiData.find(item => item.key === 'easy');
        if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
        return kpi;
    }

    Krilo() {
        let kpi = 0;
        const kpiData = this.kpiData.find(item => item.key === 'easy');
        if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
        return kpi;
    }
        
    
}