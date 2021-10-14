import {activatedPage, limit} from './pagination.js';


let tableContent = document.getElementById('tableContent');

export const dataForTable = [
    {
        id: 1111,
        author: 'Александр Пушкин',
        name: 'Евгений Онегин',
        price: 250,
    },
    {
        id: 1112,
        author: 'Михаил Булгаков',
        name: 'Мастер и Маргарита',
        price: 150,
    },
    {
        id: 1113,
        author: 'Фёдор Достоевский',
        name: 'Преступление и наказание',
        price: 250,
    },
    {
        id: 1114,
        author: 'Лев Толстой',
        name: 'Война и мир',
        price: 150,
    },
    {
        id: 1115,
        author: 'Джордж Оруэлл',
        name: '1984',
        price: 350,
    },
    {
        id: 1116,
        author: 'Лев Толстой',
        name: 'Анна Каренина',
        price: 250,
    },
    {
        id: 1117,
        author: 'Фёдор Достоевский',
        name: 'Идиот',
        price: 270,
    },
    {
        id: 1118,
        author: 'Эрих Мария Ремарк',
        name: 'Три товарища',
        price: 1600,
    }
];


/*отображает данные в таблице*/
export function showData(data = dataForTable) {
    tableContent.innerHTML = '';
    let selectedData = data.slice((activatedPage - 1) * limit, activatedPage * limit);

    selectedData.forEach((data) => {
        setTimeout(() => {
            tableContent.innerHTML += `
      <tr>
        <td>${data.id}</td>
        <td>${data.author}</td>
        <td>${data.name}</td>
        <td>${data.price}</td>
       </tr>`
        });
    })
}
