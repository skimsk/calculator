// ToDo: Refactor class Table

export default class Table {
    

    $table = document.createElement('table');

    $thead = document.createElement('thead');

    $tbody = document.createElement('tbody');

    #rows = new Map();

    constructor(key) {
        this.$table.id = 'table-' + key;
        this.$table.className = 'table-' + key;
        this.$table.classList.add('table', 'table-striped', 'table-hover');
        this.$table.append(this.$tbody);
    }

    setRows(rows) {
        rows.forEach(row => this.addRow(row));
        return this;
    }

    addRow(id, data) {
        this.#rows.set(id, data);  
        return this;
    }
 
    deleteRow(key) {
        if (this.#rows.has(key)) {
            this.#rows.delete(key);
        } else {
            throw "[Table.deleteRow] - Row key not found in table";
        }
        
        return this;
    }

    clear() {
        this.#rows = new Map();   
        return this;
    }

    update() {
        this.$tbody.innerHTML = '';

        let rowIndex = 1;
        for (const row of this.getRows().values()) {
            let colIndex = 1; 
            const $tr = this.tr(rowIndex++);

            row.forEach(column => {
                const $td = this.td(colIndex++);
                $td.append(column);
                $tr.append($td);
            })

            this.$tbody.append($tr);
        }
        return this;
    }

    getRow(key) {
        if (this.#rows.has(key)) return this.#rows.get(key);
    }

    getRows() {
        return this.#rows;
    }
    
    getRowsCount() {
        return this.getRows().size;
    }

    tbody() {
        return this.$tbody;
    }

    tr(index) {
        const $tr = document.createElement('tr');
        $tr.dataset.index = index;
        $tr.className = 'table-row-' + index;
        return $tr;
    }

    td(index) {
        const $td = document.createElement('td');
        $td.className = 'td-' + index;
        return $td; 
    }

    thead(columns) {
        let colIndex = 1;
        const $tr = this.tr(0);
        
        columns.forEach(item => {
            const $th = this.th(colIndex);
            $th.append(item);
            $tr.append($th);
            colIndex++;   
        });

        this.$thead.append($tr);
        this.$table.prepend(this.$thead);
        return this;
    }

    th(index) {
        const $th = document.createElement('th');
        $th.className = 'th-' + index;
        return $th; 
    }


    render() {
        return this.$table;  
    }
}