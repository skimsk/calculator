import Polotna from '../../../data/polotna.js';  // Убедитесь, что путь корректен
import ProductForm from "../ProductForm.js";

export default class RolletnayaItalia extends ProductForm {

    constructor(config = {}) {
        super(config);
    }

    canvas(field) {
        const height = this.getInput('height'); // Поле "высота"
        const canvasColors = this.getInput('canvas_color'); // Поле для выбора цвета

        if (canvasColors !== undefined) {
            field.on('change', () => {
                const canvasValue = field.getValue();

                // Обновление доступных цветов
                if (Polotna.hasOwnProperty(canvasValue)) {
                    canvasColors.setOptions(Polotna[canvasValue]);
                }

                // Обновление максимальной высоты
                switch (canvasValue) {
                    case 'polltexrollet': 
                        height.setMax('1800').validate();
                        break;
                    case 'fiberglassrollet': 
                        height.setMax('2500').validate();
                        break;  
                    default: 
                        height.setMax('2500').validate();
                        break;   
                }
            });
        }
    }
}
