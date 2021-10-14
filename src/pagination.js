import {showData, dataForTable} from './table';
import {clearFilters} from './filterring'


export let limit = 4; /*максимальное количество записей на странице*/
export let activatedPage = 1; /*активная страница*/

const paginator = document.getElementById('paginator');
const pages = document.getElementById('pages');
const paginatorStart = document.getElementById('paginatorStart');
const paginatorEnd = document.getElementById('paginatorEnd');
const paginatorPrevious = document.getElementById('paginatorPrevious');
const paginatorNext = document.getElementById('paginatorNext');
const selectLimit = document.getElementById('selectLimit');
const message = document.getElementById('message');


let pageCount; /*счетчик страниц*/

/*подготовить*/
export function preparePaginator() {
    calculatePageCount();
    showPageNumbers();
}

/*изменяет максимальное количество отображаемых элементов на странице*/
function changeLimit(event) {
    limit = Number(event.target.value);
    calculatePageCount();
    showPageNumbers();
    showData();
    clearFilters();
}

/*считает какое количество страниц необходимо при том или ином limit*/
export function calculatePageCount(data = dataForTable) {
    pageCount = Math.ceil((data.length) / limit);
}

/*отображает номера страницы*/
export function showPageNumbers() {
    message.innerHTML = '';
    pages.innerHTML = '';
    if (pageCount > 0) {
        paginator.style.display = 'flex';
        for (let i = 1; i <= pageCount; i++) {
            setTimeout(() => {
                let span = document.createElement('span');
                span.innerHTML = `${i}`;
                span.addEventListener("click", () => {
                    changeActivatedPage(i)
                })
                pages.appendChild(span);
            })
        }
        setTimeout(() => {
            markActivatedPage();
        });
    } else {
        message.innerHTML = 'Нет данных';
        paginator.style.display = 'none';
    }
}


/*маркирует активную страницу*/
function markActivatedPage() {
    pages.childNodes.forEach((span) => {
        if (Number(span.innerText) === activatedPage || span.classList.value === 'activated') {
            span.classList.toggle('activated');
        }
    })
    toggleDisabled();
}

function toggleDisabled() {
    if (activatedPage === 1) {
        paginatorStart.disabled = true;
        paginatorPrevious.disabled = true;
    } else {
        paginatorStart.disabled = false;
        paginatorPrevious.disabled = false;
    }
    if (activatedPage === pageCount) {
        paginatorNext.disabled = true;
        paginatorEnd.disabled = true;
    } else {
        paginatorNext.disabled = false;
        paginatorEnd.disabled = false;
    }
}

/*изменяет активную страницу*/
function changeActivatedPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= pageCount && pageNumber !== activatedPage) {
        activatedPage = pageNumber;
        markActivatedPage();
        showData();
    }
}

paginatorStart.addEventListener('click', () => {
    changeActivatedPage(1);
});
paginatorEnd.addEventListener('click', () => {
    changeActivatedPage(pageCount);
});
paginatorPrevious.addEventListener('click', () => {
    changeActivatedPage(activatedPage - 1);
});
paginatorNext.addEventListener('click', () => {
    changeActivatedPage(activatedPage + 1);
});
selectLimit.addEventListener('change', changeLimit);
