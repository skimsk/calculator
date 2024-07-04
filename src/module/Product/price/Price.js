export default class Price {

    
    constructor(formData, priceData) {
        this.formData = formData;
        this.priceData = priceData;
        this.debug = false;
    }


    // Основная функция для рассчета цены
    calculate() {
        throw new Error('Must implement calculate() method');
    }

 
    /**
     * Получение цены по имени поля формы
     * @param {string} inputKey 
     */
    getInputPrice(inputKey) {
        const inputData = this.formData.get(inputKey);
        if (!inputData || !inputData.value) return { price: 0, min: 0 }

        if (Array.isArray(inputData.value)) {
            return inputData.value.map((item) => {
                return { ...{ price: 0, min: 0 }, ...this.findPrice(inputKey, item.value) };
            });
        }

        return { ...{ price: 0, min: 0 }, ...this.findPrice(inputKey, inputData.value) };
    }

    // Рассчет площади сетки с переводом мм. в кв.м.
    calcArea() {
        let areaM2 = 0;
        const w = this.formData.get('width')?.value;
        const h = this.formData.get('height')?.value;
        if (w && h) areaM2 = parseFloat(((w / 1000) * (h / 1000)).toFixed(6));

        // Debug
        if (this.debug === true) console.log(`calcArea = ${areaM2}`);

        return areaM2;
    }

    // Рассчет цены с учетом площади сетки 
    // priceM2 - цена за кв.м.
    // priceM2Min - минимальная цена.
    calcAreaPrice(priceM2, priceM2Min = 0) {
        let areaPrice = 0;
        areaPrice += (priceM2 || 0) * this.calcArea();
        if (areaPrice < priceM2Min) areaPrice = priceM2Min;

        // Debug
        if (this.debug === true) console.log(`areaPrice = ${areaPrice}`);

        return areaPrice;
    }


    // Рассчет цены полотна + цены на цвет рамки
    calcCanvasFramePrice() {
        let price = 0, priceM2 = 0, priceM2Min = 0, framePrice = 0;

        priceM2 = this.getInputPrice('canvas').price;
        priceM2Min = this.getInputPrice('canvas').min;
        framePrice = this.getInputPrice('frame_color').price;

        // Цена за полотно + цена за рамку
        price = this.calcAreaPrice(priceM2 + framePrice); 
        // Если цена получилась меньше минимальной
        if (price < (priceM2Min + framePrice)) price = priceM2Min + framePrice;

        // Debug
        if (this.debug === true) console.log(`calcCanvasFramePrice = ${price}`);

        return price;
    }

    // Рассчет опций по умолчанию
    calcOptionsPrice() {
        let price = 0;
    
        // Проверяем, есть ли выбранный тип крепления
        const fastingsSelected = this.formData.get('fastings');
        const komplektSelected = this.formData.get('komplekt');  // Получаем выбранный комплект
    
        if (fastingsSelected) {
            // Получаем цену за выбранный тип крепления
            const fastingsPrice = this.getInputPrice('fastings').price;
    
            // Добавляем цену за выбранный тип крепления
            price += fastingsPrice;
    
            // Учитываем выбранный комплект
            if (komplektSelected) {
                switch (komplektSelected.value) {
                    case 'one':
                        // Стоимость уже учтена
                        break;
                    case 'half':
                        // Добавляем половину цены за тип крепления
                        const halfPrice = fastingsPrice / 2;
                        price += halfPrice;
                        break;
                    case 'two':
                        // Добавляем удвоенную цену за тип крепления
                        const twoPrice = fastingsPrice * 2;
                        price += twoPrice;
                        break;
                    default:
                        break;
                }
            }
        } else {
            // Если тип крепления не выбран, считаем цену комплекта по прайсу
            const komplektPrice = this.getInputPrice('komplekt').price;
            price += komplektPrice;
    
            // Логика для добавления других опций, если `fastings` не выбран
            for (const input of this.formData.values()) {
                const key = input.key;
                const inputPrice = this.getInputPrice(key);
    
                switch (key) {
                    case 'corners':
                    case 'handles':
                    case 'peremychka':
                        price += inputPrice.price;
                        break;
                    case 'montage':
                        price += this.getInputPrice('montage').price;
                        break;
                    case 'canvas':
                    case 'canvas_color':
                    case 'frame_color':
                        // Эти параметры не участвуют в расчете стоимости, если у вас нет дополнительной логики для них
                        break;
                    case 'remake':
                        const remakePrices = this.getInputPrice('remake').map(item => item.price);
                        const totalRemakePrice = remakePrices.reduce((sum, item) => sum + item, 0);
                        price += totalRemakePrice;
                        break;
                    default:
                        break;
                }
            }
        }
    
        // Debug
        if (this.debug === true) console.log(`calcOptionsPrice = ${price}`);
    
        return price;
    }
        

    // Рассчет цены на рельсы
    calcRailPrice() {
        let price = 0;
        let priceM = 800; // Цена за погонный метр рельсы, р.
        const rail = this.formData.get('rail');

        if (rail) {
            price = (rail.value / 1000) * priceM; // с переводом мм в метры 
        }

        return price;
    }

    calcRailPriceSlidors() {
        let price = 0;
        let priceM = 1000; // Цена за погонный метр рельсы, р.
        const rail = this.formData.get('rail');

        if (rail) {
            price = (rail.value / 1000) * priceM; // с переводом мм в метры 
        }

        return price;
    }


    // Рассчет стоимости монтажа (только для монтажников)
    calcMontage(productPrice) {
        let total = 0;
        const inputPriceData = this.getInputPrice('montage');
        if (inputPriceData) {
            // Если встречается data в виде массива, значит есть поля которые влияют на цену монтажа
            if (inputPriceData.data) {

                inputPriceData.data.forEach(field => {
                    if (field.data) {
                        switch (field.key) {
                            case 'area':
                                let price = 0;
                                const area = this.calcArea();
                                field.data.forEach(item => {
                                    if (this.inRange(area, item.min, item.max)) price = item.price || 0;
                                })
                                total += price;
                            break;
                            case 'fastings':
                                const fastings = this.formData.get('fastings');
                                if (fastings && fastings.value) {
                                    field.data.forEach(item => {
                                        if (fastings.value === item.key) total += item.price || 0;
                                    })
                                }
                            break;
                            case 'hinges':
                                const hinges = this.formData.get('hinges');
                                if (hinges && hinges.value) {
                                    field.data.forEach(item => {
                                        if (hinges.value === item.key) total += item.price || 0;
                                    })
                                }
                            break;
                        }
                    } 
                });

            }

            // При обычном параметре price - просто добавляем его к цене монтажа
            if (inputPriceData.price) total += inputPriceData.price;

            // При параметре percent - рассчитываем стоимость монтажа из цены продукта
            if (inputPriceData.percent && productPrice) {
                total += Math.round(productPrice * inputPriceData.percent / 100);
            }
        }

        // Debug
        if (this.debug === true) console.log(`calcMontage = ${total}`);
        
        return total;
    }

    // Поиск цены по ключу в массиве цен (priceData[key] = arrayOf {key, price, min})
    findPrice(key, value) {
        return this.priceData[key]?.find(item => item.key === value);
    }

    inRange(num, min, max) {
        if (num) {
            if (min && !max) return num >= min;
            if (!min && max) return num <= max;
            if (min && max) return (num >= min && num <= max);
        }
        return false;
    };


    debug(text = '', value = '') {
        if (this.debug) console.log(`${text} = ${value}`);
    }
    


}