import {ProductTab} from "./CreateProductTab";
import {ContentTab} from "./CreateTabContent";

export function productPage() {

    const RANGE = document.getElementById('range')

    //получение данных о том какой таб нужно генерировать
    let url = location.href;
    let urlCopy = new URL(url);
    let categorySelect = urlCopy.searchParams.get('categorySelect');
    let typeSelect = urlCopy.searchParams.get('typeSelect');

    function tabProductCreate() {



        RANGE.innerHTML = ''
        let tabProduct = new ProductTab(categorySelect, typeSelect)
        RANGE.append(tabProduct.renderTab())

        const TAB_ITEM = document.querySelector('.list-item').querySelectorAll('.item')

        if (typeSelect === null || typeSelect === '' || typeSelect === undefined) {
            TAB_ITEM[0].classList.add('active')
        } else {
            TAB_ITEM.forEach( (TAB_ITEM) => {
                if (TAB_ITEM.innerText === typeSelect) {
                    TAB_ITEM.classList.add('active')
                }
            })
        }

        tabContentCreate()

    }

    tabProductCreate()


    function tabContentCreate() {
        const CONTENT_PRODUCT = document.querySelector('.range-description')

        CONTENT_PRODUCT.innerHTML = ''
        let tabContent = new ContentTab()
        CONTENT_PRODUCT.append(tabContent.renderTab())

        const TABLE_CONTENT = document.querySelector('.range-button__link')


        if (TABLE_CONTENT.getAttribute('data-visible') === 'none') {
            TABLE_CONTENT.style.display = 'none'
        }

    }

    $('.feedback-slider').slick({
        autoplay:false,
        variableWidth: true,
        arrows: false,
    });

    const FEEDBACK_BTN_PREV = document.getElementById('feedback-btn-prev')
    const FEEDBACK_BTN_NEXT = document.getElementById('feedback-btn-next')

    FEEDBACK_BTN_PREV.onclick = () => {
        $('.feedback-slider').slick('slickPrev');
    }
    FEEDBACK_BTN_NEXT.onclick = () => {
        $('.feedback-slider').slick('slickNext');
    }

    const LIST_TAB = document.querySelector('.list-item')
    const TAB_ITEM = LIST_TAB.querySelectorAll('.item')

    LIST_TAB.addEventListener('click', (event) => {
        let element = event.target
        if (element.classList.contains('item') && !element.classList.contains('active')) {
            TAB_ITEM.forEach( (TAB_ITEM) => {
                TAB_ITEM.classList.remove('active')
            })
            element.classList.add('active')
            tabContentCreate()
        }
    })

}