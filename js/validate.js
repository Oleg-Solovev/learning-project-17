import { addGoods } from "./addGoods.js"

export function validate() {
    const validate = new JustValidate('#form');
    validate.addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Введите название товара',
        },
    ]);
    validate.addField('#shelf', [
        {
            rule: 'required',
            errorMessage: 'Введите название полки',
        },
    ]);
    validate.addField('#weight', [
        {
            rule: 'required',
            errorMessage: 'Введите вес товара',
        },
        {
            rule: 'number',
        },
    ]);
    validate.addField('#date', [
        {
            rule: 'required',
            errorMessage: 'Введите время хранения товара',
        }
    ]);
    validate.onSuccess(addGoods);
}