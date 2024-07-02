import InputText from "../../components/form/InputText.js";
import Button from "../../components/buttons/Button.js";

const InputSearch = new InputText('query').setPlaceholder('Поиск ...');
const ButtonSearch = new Button('button-search');


export { InputSearch, ButtonSearch }
