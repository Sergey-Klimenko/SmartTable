import {dataForTable, showData} from "./table";
import {calculatePageCount, showPageNumbers} from "./pagination";

let filterId = document.getElementById('filterId');
let filterAuthor = document.getElementById('filterAuthor');
let filterName = document.getElementById('filterName');
let filterPrice = document.getElementById('filterPrice');


export function prepareFiltering() {

    filterId.addEventListener('keyup', () => {
        filter('id');
    });
    filterAuthor.addEventListener('keyup', () => {
        filter('author');
    });
    filterName.addEventListener('keyup', () => {
        filter('name');
    });
    filterPrice.addEventListener('keyup', () => {
        filter('price');
    });
}

function filter(filterField) {
    const filterValue = event.target.value;
    const filteredData = filterValue ? filterData(dataForTable, filterField, filterValue) : dataForTable;
    showData(filteredData);
    calculatePageCount(filteredData);
    showPageNumbers();
}

function filterData(data, filterField, filterValue) {
    return data.filter((item) => {
        return String(item[filterField]).toLowerCase().indexOf(filterValue.toLowerCase()) > -1
    })
}

export function clearFilters() {
    filterId.value = '';
    filterAuthor.value = '';
    filterName.value = '';
    filterPrice.value = '';
}
