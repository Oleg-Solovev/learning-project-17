import * as components from "./components.js"
import { downloadFromLS, saveInLS } from "./localBase.js"
import { navigate } from "./navigate.js"

export default function createAddGoods(containerEl) {
    const titleEl = components.getTiteEl("Добавить запись")
    titleEl.classList.add('form__title')
    const addForm = components.getFormEl()

    const inputNameEl = components.getInputEl("text", "name", "Название")
    const inputShelfEl = components.getInputEl("text", "shelf", "Полка")
    const inputWeightEl = components.getInputEl("number", "weight", "Вес")
    const inputStorageTimeEl = components.getInputEl("date", "date", "")


    const addButtonEl = components.getButtonEl("Добавить запись")
    addButtonEl.classList.add('form__btn')
    addButtonEl.type = 'submit'
    // addButtonEl.addEventListener("click", function (e) {
    //     e.preventDefault()
    //     addGoods()
    // })

    addForm.append(inputNameEl, inputShelfEl, inputWeightEl, inputStorageTimeEl, addButtonEl)
    containerEl.append(titleEl, addForm)

    // подключение библиотеки валидации форм
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

function addGoods() {
    const newGood = {
        id: Math.round(Math.random() * 1000),
        name: document.querySelector('[name="name"]').value,
        shelf: document.querySelector('[name="shelf"]').value,
        weight: document.querySelector('[name="weight"]').value,
        storageTime: document.querySelector('[name="date"]').value,
    }

    const data = downloadFromLS()
    data.push(newGood)
    saveInLS(data)
    navigate()
}



