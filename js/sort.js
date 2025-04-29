import { navigate } from "./navigate.js"
import { downloadFromLS, saveInLS } from "./localBase.js"

export function sortTable(prop) {

    const sortArr = downloadFromLS()
    sortArr.sort((a, b) => {
        if (a[prop] < b[prop]) return -1
        if (a[prop] > b[prop]) return 1
        return 0
    })
    saveInLS(sortArr)
    navigate()
    return
}