import KPIData from '../../../data/kpi.js'

export default class KPIAssembler {

    constructor(productKey, formData) {
        this.productKey = productKey;
        this.formData = formData;
        if (!KPIData.assembler || !KPIData.assembler[this.productKey])  {
            throw new Error(`KPIAssembler[constructor] Invalid KPIData ${productKey}`);
        }
        this.kpiData = KPIData.assembler[this.productKey];
    }


    calculate() {
        if (typeof this[this.productKey] === 'function') {
            return this[this.productKey]();
        } else {
            return this.Default();
        }
    }


    Default() {
        let kpi = 0;
        kpi += this.canvasKPI();
        kpi += this.optionsKPI();
        return kpi;      
    }

    
    RulonnayaPolsha() {
        let kpi = 0;
        const canvas = this.findItem('canvas', 'all');
        if (!canvas || !canvas.price) return 0;
        const areaKPI = this.calcAreaPrice(canvas.price);
        kpi += (areaKPI <= canvas.price) ? canvas.price : areaKPI;
        return kpi;
    }

    RolletnayaItalia() {
        let kpi = 0;
        const canvas = this.findItem('canvas', 'all');
        if (!canvas || !canvas.price) return 0;
        const areaKPI = this.calcAreaPrice(canvas.price);
        kpi += (areaKPI <= canvas.price) ? canvas.price : areaKPI;
        return kpi;
    }

    RulonnayaItalia() {
        let kpi = 0;
        const canvas = this.findItem('canvas', 'all');
        if (!canvas || !canvas.price) return 0;
        const areaKPI = this.calcAreaPrice(canvas.price);
        kpi += (areaKPI <= canvas.price) ? canvas.price : areaKPI;
        return kpi;
    }

    PlisseRussia() {
        let kpi = 0, priceM2 = 0;
        priceM2 += this.getInputKPI('opening').price;
        const areaKPI = this.calcAreaPrice(priceM2);
        kpi += (areaKPI <= priceM2) ? priceM2 : areaKPI;
        return kpi;
    }

    PlisseItaly() {
        let kpi = 0, priceM2 = 0;
        const installValue = this.formData.get('install')?.value;
        const openingKPI = this.getInputKPI('opening');
    
        if (installValue) {
            switch (installValue) {
                case 'proem7mm':
                    priceM2 += openingKPI?.price;
                    break;
                default:
                    priceM2 += openingKPI?.install;
                    break;
            }
        }
        const areaKPI = this.calcAreaPrice(priceM2);
        kpi += (areaKPI <= priceM2) ? priceM2 : areaKPI;
        return kpi;
    }




    /**
     * Методы рассчета KPI
     */
    // Рассчет kpi по полотну (за общую площадь полотна сетки)
    // Минимальный kpi равен цене за кв.м.
    canvasKPI() {
        let kpi = 0, priceM2 = 0;
        priceM2 += this.getInputKPI('canvas').price;
        kpi += this.calcAreaPrice(priceM2); 
        return (kpi <= priceM2) ? priceM2 : kpi; 
    }

    // Рассчет kpi для стандартных опций большинства сеток
    optionsKPI() {
        let kpi = 0;
        for (const input of this.formData.values()) {
            switch (input.key) {
                case 'corners':
                case 'handles':
                case 'fastings':
                case 'hinges':
                    kpi += this.getInputKPI(input.key).price;
                break;
                case 'remake':
                    kpi += this.getInputKPI('remake').reduce((sum, item) => sum + item.price, 0);
                    break;
            }
        }
        return kpi;
    }

    // Получение цены по имени поля формы ( в том числе из массивов типа checkbox )
    getInputKPI(inputKey) {
        const inputData = this.formData.get(inputKey);
        if (!inputData || !inputData.value) return { price: 0 }

        if (Array.isArray(inputData.value)) {
            return inputData.value.map((item) => {
                return { ...{ price: 0 }, ...this.findItem(inputKey, item.value) };
            });
        }

        return { ...{ price: 0 }, ...this.findItem(inputKey, inputData.value) };
    }

    // Поиск по ключу в массиве данных KPI (kpiData[key] = arrayOf {key, price})
    findItem(key, value) {
        return this.kpiData[key]?.find(item => item.key === value);
    }

    // Рассчет площади сетки с переводом мм. в кв.м.
    calcArea() {
        let areaM2 = 0;
        const w = this.formData.get('width')?.value;
        const h = this.formData.get('height')?.value;
        if (w && h) areaM2 = parseFloat(((w / 1000) * (h / 1000)).toFixed(6));
        return areaM2;
    }

    // Рассчет kpi с учетом площади (priceM2 - цена за кв.м).
    calcAreaPrice(priceM2) {
        return (priceM2 || 0) * this.calcArea();
    }

}