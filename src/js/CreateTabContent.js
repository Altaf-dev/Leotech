
export class ContentTab {
    constructor() {

    }

    renderTab() {

        const BUTTON_SALE = document.querySelector('.button-sale')
        const BUTTON_SPECIAL = document.querySelector('.button-special')
        const BUTTON_TABLE = document.querySelector('.button-table')
        const TEXT_PASSPORT = document.querySelector('.text-passport')
        const TEXT_CERTIFICATE = document.querySelector('.text-certificate')
        const TAB_ITEM = document.querySelector('.list-item').querySelectorAll('.item')
        const TAB_DETAIL = document.querySelectorAll('.tab-detail')

        let activeTab
        let activeTabName

        //Находим выбранный таб в DOM
        TAB_ITEM.forEach( (TAB_ITEM) => {
            if (TAB_ITEM.classList.contains('active')) {
                activeTabName = TAB_ITEM.innerText
            }
        })

        //Находим данные для выбранного таба
        TAB_DETAIL.forEach( (TAB_DETAIL) => {
            if (TAB_DETAIL.getAttribute('data-headline') === activeTabName) {
                activeTab = TAB_DETAIL
            }
        })

        let template = ''

        let contentTab = document.createElement('div')

        let linkTable

        if (activeTab.getAttribute('data-table') === '') {
            linkTable = 'none'
        } else {
            linkTable = 'visible'
        }

        template += `<h2 class="range-description__title">${activeTab.getAttribute('data-headline')}</h2>`
        template += `<div class="range-description__image">`
        template += `<img src="${activeTab.getAttribute('data-image')}" alt="image1" class="image">`
        template += `<img src="${activeTab.getAttribute('data-illustration')}" alt="image2" class="image">`
        template += `</div>`
        template += `<div class="range-button">`
        template += `<button class="range-button__item btn1 modal-sale" data-subject="Заказ продукта" data-product="Клиента интерисует - ${activeTab.getAttribute('data-headline')}" data-headline="${activeTab.getAttribute('data-button-headline')}">${BUTTON_SALE.innerText}</button>`
        template += `<button class="range-button__item btn2 modal-open" data-subject="Внимание! Спецзаказ!" data-special="Внимание! Спецзаказ на - ${activeTab.getAttribute('data-headline')}" data-headline="${activeTab.getAttribute('data-button-special')}">${BUTTON_SPECIAL.innerText}</button>`
        template += `<a href="${activeTab.getAttribute('data-table')}" data-fancybox="gallery-table" class="range-button__link" data-visible="${linkTable}">${BUTTON_TABLE.innerText}</a>`
        template += `</div>`
        template += `<div class="range-text">`
        template += `<div class="range-text__wrap">`
        template += `<p class="text">${activeTab.getAttribute('data-description')}</p>`
        template += `<p class="sub-text">${TEXT_PASSPORT.innerHTML}</p>`
        template += `</div>`
        template += `<p class="range-text__info">${TEXT_CERTIFICATE.innerHTML}</p>`
        template += `</div>`

        contentTab.innerHTML = template;

        return contentTab;
    }
}



