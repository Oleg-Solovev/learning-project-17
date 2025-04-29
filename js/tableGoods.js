import * as components from "./components.js"
import { downloadFromLS } from "./localBase.js"
import { navigate } from "./navigate.js"

export default function createTableGoods(containerEl) {
    const titleEl = components.getTiteEl("Склад")
    const addButtonEl = components.getButtonEl("Добавить запись")
    addButtonEl.addEventListener("click", function () {
        navigate("addGoods")
    })
    const wrapEl = components.getWrapEl('table__wrap')
    wrapEl.append(titleEl, addButtonEl)

    const tableEl = components.createTableEl()
    const tbodyEl = document.createElement('tbody')
    const data = downloadFromLS()
   
    data.forEach(el => {
        tbodyEl.append(components.getTrEl(el))
    });

    tableEl.append(tbodyEl)
    containerEl.append(wrapEl, tableEl)
}