import { delateFromLS } from "./localBase.js"
import { sortTable } from "./sort.js"

// Получение элемента заголовка
function getTiteEl(text) {
    const titleEl = document.createElement("h1")
    titleEl.textContent = text
    titleEl.classList.add("main-title")
    return titleEl
}

// Получение элемента блока обёртки
function getWrapEl(className) {
    let buttonsWrapEl = document.createElement("div")
    buttonsWrapEl.classList.add(className)
    return buttonsWrapEl
}

// Получение элемента кнопки
function getButtonEl(text) {
    const buttonEl = document.createElement("button")
    buttonEl.textContent = text
    buttonEl.classList.add("btn")
    return buttonEl
}

// Получение элемента формы
function getFormEl() {
    const formEl = document.createElement("form")
    formEl.classList.add("form")
    formEl.id = 'form'
    return formEl
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder) {
    const inputWrapEl = getWrapEl('form__input-wrap')
    const inputEl = document.createElement("input")
    inputEl.type = type
    inputEl.name = name
    inputEl.id = name
    inputEl.placeholder = placeholder
    inputEl.classList.add("text-field")
    inputEl.required = true
    inputWrapEl.append(inputEl)
    return inputWrapEl
}

// Получение элемента ячейки заголовка таблицы
function getThEl(text = '') {
    const thEl = document.createElement("th")
    thEl.textContent = text
    thEl.classList.add("table__text-th")
    return thEl
}

// Получение элемента ячейки строки таблицы
function getTdEl(text = '') {
    const tdEl = document.createElement("td")
    tdEl.textContent = text
    tdEl.classList.add("table__text-td")
    return tdEl
}

// Получение элемента строки таблицы
function getTrEl(data = {}) {
    const trEl = document.createElement("tr")
    const tdNameEl = getTdEl(data.name)
    const tdShelfEl = getTdEl(data.shelf)
    const tdWeightEl = getTdEl(data.weight)
    const tdStorageTimeEl = getTdEl(getDateFormat(data.storageTime))
    const btnWrapTdEl = getTdEl()
    const delateButtonEl = getButtonEl("Удалить")
    delateButtonEl.classList.add('btn-delate')
    delateButtonEl.addEventListener("click", function () {
        delateFromLS(data.id)
    })
    btnWrapTdEl.append(delateButtonEl)
    trEl.append(tdNameEl, tdShelfEl, tdWeightEl, tdStorageTimeEl, btnWrapTdEl)

    return trEl
}

// Получение таблицы
function createTableEl() {
    const tableEl = document.createElement("table")
    tableEl.classList.add("table")
    const thead = document.createElement("thead")
    thead.classList.add("thead")
    const trEl = document.createElement("tr")
    const thNameEl = getThEl("Название")
    let dir = true;
    thNameEl.addEventListener("click", function (event) {
        if (event._isClick === true) return
        sortTable('name');
    });
    const thShelfEl = getThEl("Полка")
    thShelfEl.addEventListener("click", function (event) {
        if (event._isClick === true) return
        sortTable('shelf');
    });
    const thWeightEl = getThEl("Вес")
    thWeightEl.addEventListener("click", function (event) {
        if (event._isClick === true) return
        sortTable('weight');
    });
    const thStorageTimeEl = getThEl("Время хранения")
    thStorageTimeEl.addEventListener("click", function (event) {
        if (event._isClick === true) return
        sortTable('storageTime');
    });
    const thEl = getThEl("")
    trEl.append(thNameEl, thShelfEl, thWeightEl, thStorageTimeEl, thEl)
    thead.append(trEl)
    tableEl.append(thead)
    return tableEl
}




// Функция преобразования даты
function getDateFormat(data) {
    let date = new Date(data)
    let result = date.getFullYear() + '-'
    result = result + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) + '-' : (date.getMonth() + 1) + '-');
    result = result + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    return result
}

function getLoaderEl() {
    const loaderEl = document.createElement('div')
    loaderEl.classList.add('loader')
    return loaderEl
}

export {
    getTiteEl,
    getWrapEl,
    getButtonEl,
    getFormEl,
    getInputEl,
    getTrEl,
    getDateFormat,
    createTableEl,
    getLoaderEl
}