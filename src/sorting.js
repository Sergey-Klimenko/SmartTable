import {dataForTable, showData} from "./table";
import {clearFilters} from './filterring'
import {calculatePageCount, showPageNumbers} from "./pagination";

/*прикрепляет сортировку к заголовку*/
export function prepareSorting() {
    setTimeout(() => {
        let headerId = document.getElementById('headerId');
        let headerAuthor = document.getElementById('headerAuthor');
        let headerName = document.getElementById('headerName');
        let headerPrice = document.getElementById('headerPrice');
        headerId.addEventListener('click', () => {
            sort('id');
        });
        headerAuthor.addEventListener('click', () => {
            sort('author');
        });
        headerName.addEventListener('click', () => {
            sort('name');
        });
        headerPrice.addEventListener('click', () => {
            sort('price');
        });
    });
}

function sort(sortField) {
    sortData(dataForTable, sortField);
    showData();
    calculatePageCount();
    showPageNumbers();
    clearFilters();
}


export let sortState = {
    id: -1,
    author: -1,
    name: -1,
    price: -1
}


function sortData(data, sortField) {
    data.sort(
        (a, b) => {
            if (a[sortField] < b[sortField]) {
                return sortState[sortField];
            }
            if (a[sortField] > b[sortField]) {
                return -sortState[sortField];
            }
            return 0;
        }
    );
    sortState[sortField] = -sortState[sortField];
}
// conflict
