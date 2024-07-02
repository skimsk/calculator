import Order from "../Order/Order.js";
import { InputSearch, ButtonSearch } from "./ExtrasSearch.js";
import ExtrasTable from "./ExtrasTable.js";


// Регистрация наблюдателей для компонентов модуля 
Order.registerObserver(ExtrasTable);


/**
 * События модуля
 */
// Обработчик поля поиска
let searchTimeout;
InputSearch.on('keyup', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {  
        tableFilter(this.getValue());
    }, 500); 
});

ButtonSearch.on('click', () => {
    tableFilter(InputSearch.getValue());
});


/**
 * Функции
 */
function tableFilter(textString = '') {
    const tableRows = ExtrasTable.tbody().querySelectorAll('tr'); // Получаем html строк таблицы 
    textString = textString.toLowerCase();
    tableRows.forEach(row => {
        const targetColumn = row.querySelector('.td-2');
        if (targetColumn !== undefined) {
            const content = targetColumn.textContent.toLowerCase();
            if (content.includes(textString)) {
                row.classList.remove('is-hidden')
            } else {
                row.classList.add('is-hidden')
            }  
        }
    });
}

function render() {
    const $wrapper = document.createElement('div');
    $wrapper.className = 'module-container';
    $wrapper.innerHTML = `
        <div class="module-extras-search">
            <div class="container">
                <div class="module-header">
                    <h2>Комплектующие</h2>
                </div>
                <div class="form-search" id="ModuleExtrasSearch"></div>
            </div>
        </div>
        <div class="module-extras-table">
            <div class="container" id="ModuleExtrasTable">
            
            </div>
        </div>
    `;

    $wrapper.querySelector('#ModuleExtrasSearch').append(InputSearch.render(), ButtonSearch.render());
    $wrapper.querySelector('#ModuleExtrasTable').append(ExtrasTable.render());

    return $wrapper;
}

export { render };