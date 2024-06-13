import Input from "../form/Input.js";

export default class Button extends Input {

    
    key = null;

    $element = document.createElement('button');

    $label = document.createElement('span');

    $iconWrapper = document.createElement('i');


    constructor(key, type = 'button') {
        super(key)
        this.key = key || 'key';

        this.$element.className = 'button ' + this.key;
        this.$element.type = type;
        this.$element.name = this.key;
        this.$element.id = this.key;

        this.$iconWrapper.classList.add('icon');
    }

    addClass(name) {
        if (name !== undefined) this.$element.classList.add(name);
        return this;
    }

    removeClass(name) {
        if (name !== undefined) this.$element.classList.remove(name);
        return this;
    }

    setClass(name) {
        if (name !== undefined) this.$element.className = name;
        return this;
    }

    setText(text) {
        if (text !== undefined) {
            this.$label.innerText = text;
            this.$element.append(this.$label);
        }
        return this;
    }

    setTitle(text) {
        if (text) this.$element.setAttribute('title', text);  
    }
       
    setIcon(name) {
        this.$iconWrapper.classList.add(name);
        this.$element.prepend(this.$iconWrapper);
        return this;
    }

    setIconImg(imgsrc = '', classes = ['img-fluid']) {
        const image = document.createElement('img')
        image.src = imgsrc;
        image.classList.add(...classes);
        this.$element.prepend(image)
        return this;
    }

    setIconSVG(svg = '') {
        this.$iconWrapper.innerHTML = svg;
        this.$element.prepend(this.$iconWrapper);
        return this;
    }

    setDisabled(flag) {
        if (typeof flag === 'boolean') {
            (flag !== false) ? this.$element.classList.add('disabled') : this.$element.classList.remove('disabled');
            this.$element.disabled = flag;
        }
        return this;
    }

    render() {
        return this.$element;
    }

}

