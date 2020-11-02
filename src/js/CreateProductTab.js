
export class ProductTab {
    constructor(categorySelect) {
        this.categorySelect = categorySelect
    }

    renderTab() {

        const VARIETIES = document.querySelector('.varieties')
        const TAB_DATA = document.querySelector('.tab-data')
        const TAB_ITEM = TAB_DATA.querySelectorAll('.tab-item')
        const PRODUCT_BG = document.querySelector('.product-bg')
        const MAIN_HEADLINE= document.querySelector('h1')
        const MAIN_SUBTITLE = document.querySelector('.product-wrap__subtitle')
        const BULLET_HEADLINE_1 = document.getElementById('bullet-headline-1')
        const BULLET_HEADLINE_2 = document.getElementById('bullet-headline-2')
        const BULLET_HEADLINE_3 = document.getElementById('bullet-headline-3')
        const BULLET_HEADLINE_4 = document.getElementById('bullet-headline-4')
        const BULLET_HEADLINE_5 = document.getElementById('bullet-headline-5')
        const BULLET_DESCRIPTION_1 = document.getElementById('bullet-description-1')
        const BULLET_DESCRIPTION_2 = document.getElementById('bullet-description-2')
        const BULLET_DESCRIPTION_3 = document.getElementById('bullet-description-3')
        const BULLET_DESCRIPTION_4 = document.getElementById('bullet-description-4')
        const BULLET_DESCRIPTION_5 = document.getElementById('bullet-description-5')


        let activeTab

        // Определение выбранного таба

        if (this.categorySelect === '' || this.categorySelect === null || this.categorySelect === undefined) {
            activeTab = TAB_ITEM[0]
        } else {
            TAB_ITEM.forEach( (TAB_ITEM) => {
                if (TAB_ITEM.getAttribute('data-headline') === this.categorySelect) {
                    activeTab = TAB_ITEM
                }
            })
        }



        let imagePath = 'url(' + activeTab.getAttribute('data-bg') + ')'

        let mainHeadline = activeTab.getAttribute('data-main-headline')

        PRODUCT_BG.style.backgroundImage = imagePath

        MAIN_HEADLINE.innerHTML = mainHeadline
        MAIN_SUBTITLE.innerHTML = activeTab.getAttribute('data-main-subtitle')
        BULLET_HEADLINE_1.innerHTML = activeTab.getAttribute('data-bullet-headline-1')
        BULLET_HEADLINE_2.innerHTML = activeTab.getAttribute('data-bullet-headline-2')
        BULLET_HEADLINE_3.innerHTML = activeTab.getAttribute('data-bullet-headline-3')
        BULLET_HEADLINE_4.innerHTML = activeTab.getAttribute('data-bullet-headline-4')
        BULLET_HEADLINE_5.innerHTML = activeTab.getAttribute('data-bullet-headline-5')
        BULLET_DESCRIPTION_1.innerText = activeTab.getAttribute('data-bullet-description-1')
        BULLET_DESCRIPTION_2.innerText = activeTab.getAttribute('data-bullet-description-2')
        BULLET_DESCRIPTION_3.innerText = activeTab.getAttribute('data-bullet-description-3')
        BULLET_DESCRIPTION_4.innerText = activeTab.getAttribute('data-bullet-description-4')
        BULLET_DESCRIPTION_5.innerText = activeTab.getAttribute('data-bullet-description-5')


        let tabDetail = activeTab.querySelectorAll('.tab-detail')

        let template = ''

        let productTab = document.createElement('div');
        productTab.className = 'range-wrap'

        template += `<div class="range-list">`
        template += `<h3 class="range-title">${VARIETIES.innerText}</h3>`
        template += `<div class="item-wrap">`
        template += `<ul class="list-item">`

        for (let i = 0; i < tabDetail.length; i++) {
            let headline = tabDetail[i].getAttribute('data-headline')
            template += `<li class="item">${headline}</li>`
        }

        template += `</ul>`
        template += `</div>`
        template += `</div>`
        template += `<div class="range-description">`
        template += `</div>`

        productTab.innerHTML = template;

        return productTab;
    }
}



