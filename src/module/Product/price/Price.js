export default class Price {

    constructor(formData, priceData) {
        this.formData = formData;
        this.priceData = priceData;
        this.debug = true;
        this.CanvasPrice = 0;
        this.OptionsPrice = 0;
        this.Montage = 0;
        this.ralPrice = 0;
        this.ralMinPrice = 0;
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
    
        if (!inputData || !inputData.value) return { price: 0, min: 0 };
    
        // Обработка массива значений
        if (Array.isArray(inputData.value)) {
            return inputData.value.map((item) => {
                return { ...{ price: 0, min: 0 }, ...this.findPrice(inputKey, item.value) };
            });
        }
    
        // Обработка одиночного значения
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



    calcCanvasPrice() {
        const prices = this.getInputPrice('canvas');
    
        // Если это массив, суммируем все цены
        const priceM2 = Array.isArray(prices) ? prices.reduce((acc, item) => acc + item.price, 0) : prices.price;
        const priceM2Min = Array.isArray(prices) ? Math.min(...prices.map(item => item.min)) : prices.min;
    
        // Цена за полотно
        let CanvasPrice = this.calcAreaPrice(priceM2);
    
        // Если цена получилась меньше минимальной
        if (CanvasPrice < priceM2Min) CanvasPrice = priceM2Min;
    
        // Сохраняем результат
        this.CanvasPrice = CanvasPrice;

        if (this.debug === true) console.log(`Базовая цена = ${CanvasPrice}`);
    
        return CanvasPrice;
    }
    
    calcRAL() {
        // Получаем массив цен по ключу 'frame_color'
        const frameColors = this.getInputPrice('frame_color');
    
        // Если frameColors является массивом, суммируем все цены
        const framePrice = Array.isArray(frameColors) 
            ? frameColors.reduce((acc, item) => acc + item.price, 0) 
            : frameColors.price;
    
        // Сохраняем значение ralMinPrice без проверки на массив
        const ralMinPrice = this.findPrice('frame_color', 'ral.min');
        this.ralMinPrice = ralMinPrice ? ralMinPrice.price : 0;  // Присваиваем только значение цены или 0
    
        // Получаем цену покраски RAL
        const ralPriceObj = this.findPrice('frame_color', 'ral');
        this.ralPrice = ralPriceObj ? ralPriceObj.price : 0;  // Присваиваем только значение цены или 0
    
        if (this.debug === true) {
            console.log(`Цена покраски в RAL: ${this.ralPrice ? this.ralPrice : 'Не найдено'}`);
            console.log(`Цена доп.покраски: ${this.ralMinPrice ? this.ralMinPrice : 'Не найдено'}`);
        }
    
        // Возвращаем итоговую цену с учетом RAL
        return framePrice;
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
    
            // Учитываем выбранный комплект
            if (komplektSelected) {
                switch (komplektSelected.value) {
                    case 'one':
                        // Стоимость уже учтена
                        price += fastingsPrice;
                        break;
                    case 'half':
                        // Добавляем половину цены за тип крепления
                        price += fastingsPrice + (fastingsPrice / 2);
                        break;
                    case 'two':
                        // Добавляем удвоенную цену за тип крепления
                        price += fastingsPrice * 2;
                        break;
                    default:
                        break;
                }
            } else {
                // Если комплект не выбран, только цена за тип крепления
                price += fastingsPrice;
            }
        } else {
            // Если тип крепления не выбран, считаем цену комплекта по прайсу
            const komplektPrice = this.getInputPrice('komplekt').price;
            price += komplektPrice;
        }
    
        // Логика для добавления других опций
        for (const input of this.formData.values()) {
            const key = input.key;
            const inputPrice = this.getInputPrice(key);
    
            switch (key) {
                case 'corners':
                case 'handles':
                case 'peremychka':
                case 'plusprice':
                case 'latche':
                case 'hinges':
                    price += inputPrice.price;
                    break;
                case 'remake':
                    price += this.getInputPrice('remake').reduce((sum, item) => sum + item.price, 0);
                    break;
                default:
                    break;
            }
        }

        
        // Сохраняем результат
        this.OptionsPrice= price;
        
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

        // Сохраняем результат
        this.MontagePrice = total;

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
    
    addResult(key, value) {
        this.results[key] = value;
    }

     // Метод для возврата всех результатов
     getResults() {
        return {
            CanvasPrice: this.CanvasPrice,
            OptionsPrice: this.OptionsPrice,
            MontagePrice: this.MontagePrice,
            ralPrice: this.ralPrice,
            ralMinPrice: this.ralMinPrice,
        };
    }

}