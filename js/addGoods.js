import * as components from "./components.js"
import { downloadFromLS, saveInLS } from "./localBase.js"
import { navigate } from "./navigate.js"
import { validate } from "./validate.js"

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

    addForm.append(inputNameEl, inputShelfEl, inputWeightEl, inputStorageTimeEl, addButtonEl)
    containerEl.append(titleEl, addForm)

    validate()
}

export function addGoods() {
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



