export default class OffCanvas {

    key = null;
    
    id = '';

    elements = new Set();

    visible = false;

    $wrapper = document.createElement('div');

    $header = document.createElement('div');

    $title = document.createElement('h5');

    $body = document.createElement('div');

    $buttonClose = document.createElement('button');


    constructor(key) {
        if (key === undefined) throw Error('OffCanvas.constructor.key is undefined');

        this.key = key;
        this.id = 'offcanvas-' + this.key;
 
        this.$wrapper.id = this.id;
        this.$wrapper.className = 'offcanvas offcanvas-start';
        this.$wrapper.classList.add(this.id);
        this.$wrapper.dataset.bsScroll = true;

        this.$header.className = 'offcanvas-header';

        this.$body.className = 'offcanvas-body';

        this.$buttonClose.type = 'button';
        this.$buttonClose.className = 'btn-close';
        this.$buttonClose.dataset.bsToggle = 'offcanvas';
        this.$buttonClose.dataset.bsTarget = '#'+this.id;
        
        this.$header.append(this.$buttonClose);
        this.$wrapper.append(this.$header, this.$body);
    }


    addElement(element) {
        if (element !== undefined) {
            this.elements.add(element);
            this.$body.append(element);
        }
        return this;
    }

    setVisible(flag) {
        if (typeof flag === 'boolean') {
            (flag === false) ? this.hide() : this.show();
        }
        return this;
    }

    hide() {
        this.$wrapper.classList.remove('show');
        this.visible = false;
        return this;
    }

    show() {
        this.$wrapper.classList.add('show');
        this.visible = true;
        return this;
    }

    setTitle(text) {
        if (text !== undefined) {
            this.$title.innerHTML = text;
            this.$header.prepend(this.$title);
        }
        return this;
    }


    render() {
        return this.$wrapper;
    }

}