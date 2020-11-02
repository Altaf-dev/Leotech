import {SliderMainPage} from "./CreateSliderMainPage";

export function mainPage() {

    const TAB_ITEM = document.querySelectorAll('.tab-item')
    const CATEGORY_NOTE = document.getElementById('category-note')
    const CATEGORY_MORE = document.getElementById('category-more')
    const BTN_MORE = document.getElementById('btn-more')
    const READ_MORE = document.getElementById('read-more')
    const READ_HIDDEN = document.getElementById('read-hidden')
    const CATEGORY_DESCRIPTION = document.getElementById('category-description')
    const TAB_BLOCK = document.querySelector('.catalog__info-block').querySelector('.tab-block')
    const MOBILE_BTN = document.querySelector('.border-block')
    let IsInitSlider = false

    //Установка активного таба
    TAB_ITEM[0].classList.add('active')

    function imageLoad() {
        const IMAGE_BLOCK = document.querySelectorAll('.image-block')

        IMAGE_BLOCK.forEach( (IMAGE_BLOCK) => {

            let imagePath = 'url(' + IMAGE_BLOCK.getAttribute('data-image') + ')'

            IMAGE_BLOCK.style.backgroundImage = imagePath
        })

    }

    function newCategory() {

        TAB_ITEM.forEach( (TAB_ITEM) => {
            if (TAB_ITEM.getAttribute('data-new') === 'new') {
                TAB_ITEM.querySelector('span').classList.add('new')
            }
        })
    }

    newCategory()

    function createCategoryDescriptionBtn() {

        TAB_ITEM.forEach( (TAB_ITEM) => {
            if (TAB_ITEM.classList.contains('active')) {
                CATEGORY_NOTE.innerText = TAB_ITEM.innerText
                CATEGORY_DESCRIPTION.querySelector('.description').innerText =
                    TAB_ITEM.getAttribute('data-description')
            }
        })

        BTN_MORE.innerText = READ_MORE.innerText

    }

    createCategoryDescriptionBtn()

    CATEGORY_MORE.onclick = () => {

        if (CATEGORY_DESCRIPTION.classList.contains('hidden')) {
            CATEGORY_MORE.style.height = '70px'
            CATEGORY_NOTE.style.display = 'none'
            BTN_MORE.innerText = READ_HIDDEN.innerText
            CATEGORY_DESCRIPTION.classList.remove('hidden')
        } else {
            CATEGORY_MORE.removeAttribute("style")
            CATEGORY_NOTE.removeAttribute("style")
            CATEGORY_DESCRIPTION.classList.add('hidden')
            createCategoryDescriptionBtn()
        }

    }

    TAB_BLOCK.addEventListener('click', (event) => {
        let element = event.target

        if (element.classList.contains('tab-item')) {
            TAB_ITEM.forEach( (TAB_ITEM) => {
                TAB_ITEM.classList.remove('active')
            })
        }
        element.classList.add('active')
        createCategoryDescriptionBtn()
        createSlider()
    })

    function sliderInit() {
        IsInitSlider = true

        $('.slider-block').slick({
            slidesToShow: 3,
            autoplay:false,
            variableWidth: true,
            arrow: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    }
                },
            ]
        });
    }

    function sliderUnInit() {
        if (IsInitSlider) {
            $('.slider-block').slick('unslick');
        }
    }

    MOBILE_BTN.onclick = () => {
        MOBILE_BTN.classList.toggle('active')
    }

    function createSlider() {
        sliderUnInit()

        const SLIDER_BLOCK = document.getElementById('slider-block')

        SLIDER_BLOCK.innerHTML = ''

        let slider = new SliderMainPage()
        SLIDER_BLOCK.append(slider.renderSlider())

        sliderInit()

        imageLoad()

    }

    createSlider()


    $('.clients-slider').slick({
        autoplay:false,
        variableWidth: true,
        arrows: false,
    });

    const CLIENT_BTN_PREV = document.getElementById('client-btn-prev')
    const CLIENT_BTN_NEXT = document.getElementById('client-btn-next')

    CLIENT_BTN_PREV.onclick = () => {
        $('.clients-slider').slick('slickPrev');
    }
    CLIENT_BTN_NEXT.onclick = () => {
        $('.clients-slider').slick('slickNext');
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


    // Переход на просмотр отзывов
    const FEEDBACK_BTN = document.getElementById('feedback-btn')

    FEEDBACK_BTN.onclick = () => {
        location.href = '#review'
    }

    // Переход на страницу О Компании
    const ABOUT_BTN = document.getElementById('about-btn')

    ABOUT_BTN.onclick = () => {
        location.href = './about'
    }

    // Переход на страницу О компании и по якорю Сертификаты
    const ABOUT_CERTIFICATE = document.getElementById('about-certificate')

    ABOUT_CERTIFICATE.onclick = () => {
        location.href = './about#slider-certificate'
    }

    window.addEventListener('click', (event) => {
        let element = event.target

        if (element.classList.contains('product-link')) {

            let link = element.getAttribute('data-link')

            let typeProduct = element.getAttribute('data-headline')

            let categoryProduct

            TAB_ITEM.forEach( (TAB_ITEM) => {
                if (TAB_ITEM.classList.contains('active')) {
                    categoryProduct = TAB_ITEM.innerText
                }
            })

            link = `${link}?categorySelect=${categoryProduct}&typeSelect=${typeProduct}#range`

            location.href = link
        }
    })

}