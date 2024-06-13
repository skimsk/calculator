import RALColors from "../../../data/ral.js"
import OffCanvas from "../../../components/bootstrap/OffCanvas.js";

export default class OffCanvasRAL extends OffCanvas {

  
    items = new Set();


    constructor(key) {
        super(key)

        this.addElement(this.createRALList());
    }
    

    createRALItem(code) {
        const item = document.createElement('li')
        const view = document.createElement('span')
        const caption = document.createElement('span')

        item.dataset.code = code;
        item.dataset.bsDismiss = 'offcanvas';
        item.dataset.bsTarget = '#' + this.id;

        view.className = 'ral-code ral-' + code;

        caption.className = 'ral-caption';
        caption.innerHTML = 'RAL ' + code;

        item.append(view, caption)
        return item;
    }

    createRALList() {
        const $list = document.createElement('ul');
        $list.className = 'ral-colors_list';

        RALColors.forEach(color => {
            if (color.code !== undefined) {
                const item = this.createRALItem(color.code); 
                this.items.add(item);
                $list.append(item);
            }
        })

        return $list;
    }


    getItems() {
        return this.items;
    }


    onClickItem(callback) {
        if (typeof callback === 'function') {
            for (const item of this.getItems()) {
                item.addEventListener('click', callback.bind(item))
            } 
        } 
    }

}
