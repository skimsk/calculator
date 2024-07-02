export default class FieldGroup {

    
    key = null;

    fields = new Set();

    $wrapper = document.createElement('div');

    $fields = document.createElement('div');

    $label = document.createElement('div');


    constructor(key, label = null) {
        this.key = key || null;

        this.$wrapper.className = 'field-group field-group-' + this.key;
        this.$label.className = 'field-group-label';
        this.$fields.className = 'field-group-fields'; 
    }


    addField(field) {
        this.fields.add(field);
        return this;
    }

    addFields(fields = []) {
        if (fields.length !== 0) {
            fields.forEach(field => {
                this.addField(field)
            })
        }
        return this;
    }

    setLabel(text) {
        if (text !== undefined) {
            this.$label.innerHTML = text;
            this.$wrapper.prepend(this.$label);
        }
        return this;
    }


    render() {
        for (const field of this.fields.values()) {
            this.$fields.append(field.render());
        }
        this.$wrapper.append(this.$fields);
        return this.$wrapper;
    }

}