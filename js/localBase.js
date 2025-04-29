import { navigate } from "./navigate.js"

// Функция сохранения массива товаров в LS 
export function saveInLS(data) {
    localStorage.setItem('listStore', JSON.stringify(data));
}

// Функция загрузки массива товаров из LS 
export function downloadFromLS() {
    let data = localStorage.getItem('listStore');
    data = data ? JSON.parse(data) : [];
    if (data.length === 0) {
        data = [
            {
                id: Math.round(Math.random() * 1000),
                name: 'Игрушки',
                shelf: 'А10',
                weight: 7,
                storageTime: new Date('2025-04-30'),
            },
            {
                id: Math.round(Math.random() * 1000),
                name: 'Книги',
                shelf: 'Б05',
                weight: 4,
                storageTime: new Date('2025-02-20'),
            },
            {
                id: Math.round(Math.random() * 1000),
                name: 'Посуда',
                shelf: 'В20',
                weight: 9,
                storageTime: new Date('2025-05-15'),
            },
        ]
        saveInLS(data);
    }

    return data
}

// Функция удаления товара из LS 
export function delateFromLS(id) {
    let data = downloadFromLS()
    data = data.filter(el => el.id !== id)
    saveInLS(data)
    navigate()
}

