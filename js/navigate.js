import { getLoaderEl } from "./components.js"

export async function navigate(cardName) {
    const appEl = document.getElementById("app")
    appEl.innerHTML = ''
    
    const loaderEl = getLoaderEl()
    appEl.append(loaderEl)

    switch (cardName) {
        case "addGoods":
            const createAddGoods = await import("./addGoods.js")
            createAddGoods.default(appEl)
            loaderEl.remove()
            break
        default:
            const createTableGoods = await import("./tableGoods.js")
            createTableGoods.default(appEl)
            loaderEl.remove()
    }
}