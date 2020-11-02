const MUNU_BTN = document.querySelector('.header__nav-btn')
const BTN = document.querySelector('.line')
const MENU_OPEN = document.querySelector('.header__menu')
const CONTACTS_OPEN_BTN = document.querySelector('.close-btn')
const CONTACTS_OPEN = document.querySelector('.header__contacts')

CONTACTS_OPEN_BTN.onclick = () => {
    CONTACTS_OPEN.classList.toggle('active')
}

MUNU_BTN.onclick = () => {
    BTN.classList.toggle('btn-open')
    MENU_OPEN.classList.toggle('menu-open')
}


// import {aboutPage} from "./aboutPage";
// import {historyPage} from "./historyPage";
// import {errorPage} from "./errorPage";
// import {mainPage} from "./mainPage";
// import {productPage} from "./productPage";
// import {mailSend} from "./sendMail";
//
//
// const HTML_BLOCK = document.querySelector('html')
// const CONTACT_BLOCK = document.querySelector('.header__contact')
// const LANG_TYPE = document.getElementById('lang-type')
// const LANG = document.querySelectorAll('.lang')
// const HEADER_MENU = document.querySelector('.header__menu')
// const MENU_BTN = document.querySelector('.btn-menu')
// const PAGE_NAME = document.getElementById('page-name')
// const MODAL_WINDOW = document.getElementById('modal-window')
// const MODAL_HEADLINE = MODAL_WINDOW.querySelector('.headline')
// const INPUT_MAIL = MODAL_WINDOW.querySelector('.mail')
// const MODAL_ATTACHMENT = MODAL_WINDOW.querySelector('.btn-upload')
// const PAGE_ANALYTICS = document.getElementById('page-analytics')
// const BTN_BACK = document.querySelector('.btn-back')
//
//
// //Константы для открывания и закрывания меню
// const PRODUCT_BTN = document.getElementById('product-btn')
// const PRODUCT_LIST = document.getElementById('product-list')
// const DESKTOP_MENU_PRODUCT_MORE = document.querySelector('.product-more')
// const DESKTOP_MENU_PRODUCT_LIST = document.querySelector('.header__menu').querySelector('.product-list')
// const MOBILE_PRODUCT_MORE = document.getElementById('mobile-product-more')
//
//
// function getActivePageName() {
//     switch (PAGE_NAME.value) {
//         case 'main-page':
//             mainPage()
//             pageAnalytics('Главная страница')
//             break;
//         case 'product':
//             productPage()
//             pageAnalytics('Продукты')
//             break;
//         case 'about':
//             aboutPage()
//             pageAnalytics('О Компании')
//             break;
//         case 'history':
//             historyPage()
//             pageAnalytics('События')
//             break;
//         case 'error':
//             errorPage()
//             break;
//         case 'thanks':
//             break;
//     }
// }
//
// getActivePageName();
//
// function pageAnalytics(pageName) {
//     PAGE_ANALYTICS.value = pageName
// }
//
//
// window.addEventListener('click', (event) => {
//     let element = event.target
//
//     if (element.classList.contains('close-btn')) {
//         CONTACT_BLOCK.classList.toggle('active')
//     }
//
//     if (element.classList.contains('lang') && !element.classList.contains('active')) {
//
//         let link = window.location.pathname
//         let langSelected = `/${element.getAttribute('data-lang')}`
//         let newLink
//         if (langSelected === '/ru') {
//             langSelected = ''
//         }
//         newLink = `${langSelected}${link}`
//
//         location.href = newLink
//     }
//
//     if (element.classList.contains('btn-menu')) {
//         HEADER_MENU.classList.toggle('active')
//         element.classList.toggle('active')
//     }
//
//     if (!element.classList.contains('btn-menu') &&
//         !element.classList.contains('header__menu-nav') &&
//         !element.classList.contains('product-more')) {
//         HEADER_MENU.classList.remove('active')
//         MENU_BTN.classList.remove('active')
//     }
//
//     if (!element.classList.contains('product-list__item') &&
//         !element.classList.contains('product-list') &&
//         !element.classList.contains('product-more') &&
//         !element.classList.contains('menu-link') &&
//         !element.classList.contains('product-list__item')) {
//         closeMenu()
//     }
//
//     if (element.classList.contains('modal-open')) {
//         let headline = element.getAttribute('data-headline')
//         let productName = element.getAttribute('data-product')
//         let specialOrder = element.getAttribute('data-special')
//         let subject = element.getAttribute('data-subject')
//         openModal(headline, productName, specialOrder, subject)
//     }
//
//
//     if (element.classList.contains('modal-callback')) {
//         let headline = element.getAttribute('data-headline')
//         let productName = element.getAttribute('data-product')
//         let specialOrder = element.getAttribute('data-special')
//         let subject = element.getAttribute('data-subject')
//         MODAL_ATTACHMENT.style.display = 'none'
//         INPUT_MAIL.style.display = 'none'
//         openModal(headline, productName, specialOrder, subject)
//     }
//
//     if (element.classList.contains('modal-sale')) {
//         const CATALOG_SEND = document.getElementById('catalog-send')
//         let catalogSend = element.getAttribute('data-catalog')
//         let headline = element.getAttribute('data-headline')
//         let productName = element.getAttribute('data-product')
//         let specialOrder = element.getAttribute('data-special')
//         let subject = element.getAttribute('data-subject')
//
//         if (catalogSend === '' || catalogSend === null || catalogSend === undefined) {
//             CATALOG_SEND.value = 0
//         } else {
//             CATALOG_SEND.value = 1
//         }
//
//         MODAL_ATTACHMENT.style.display = 'none'
//         openModal(headline, productName, specialOrder, subject)
//     }
//
//     if (element.classList.contains('modal-bd') || element.classList.contains('modal__close-btn')) {
//        modalClose()
//     }
//
//     if (element.classList.contains('product-list__item') ) {
//
//         let link = element.getAttribute('data-link')
//
//         link = `${link}?categorySelect=${element.innerText}`
//
//         location.href = link
//     }
//
//     if (element.classList.contains('btn-back')) {
//         location.href = './index'
//     }
// })
//
// function openModal(headline, productName = 'Нет данных', specialOrder = '', subject) {
//     const PRODUCT_NAME = document.getElementById('product-name')
//     const SPECIAL_ORDER = document.getElementById('special-order')
//     const SUBJECT = document.getElementById('subject')
//
//     SUBJECT.value = subject
//     PRODUCT_NAME.value = productName
//     SPECIAL_ORDER.value = specialOrder
//     MODAL_HEADLINE.innerText = headline
//     $('.modal-bd').fadeIn()
//     $('.modal-wrapper').fadeIn()
//     MODAL_WINDOW.classList.toggle('active')
//     HTML_BLOCK.classList.add('active')
// }
//
// function modalClose() {
//     $('.modal-bd').fadeOut()
//     $('.modal-wrapper').fadeOut()
//     MODAL_WINDOW.classList.remove('active')
//     HTML_BLOCK.classList.remove('active')
//     MODAL_ATTACHMENT.removeAttribute('style')
//     INPUT_MAIL.removeAttribute('style')
// }
//
// LANG.forEach((LANG) => {
//     if (LANG.getAttribute('data-lang') === LANG_TYPE.innerText) {
//         LANG.classList.add('active')
//     }
// })
//
//
// //Маска ввода телефона
// $(document).ready(function () {
//     $(".phone-mask").mask("+7 (999) 999-99-99");
// });
//
//
//
// // Открытие десктопного меню для страницы продукты
// PRODUCT_BTN.onclick = () => {
//     PRODUCT_LIST.classList.toggle('active')
//     PRODUCT_BTN.classList.toggle('active')
//     DESKTOP_MENU_PRODUCT_LIST.classList.remove('active')
// }
//
// // Открыть меню продукта в десктопном меню
// DESKTOP_MENU_PRODUCT_MORE.onclick = () => {
//     DESKTOP_MENU_PRODUCT_LIST.classList.toggle('active')
//     PRODUCT_LIST.classList.remove('active')
//     MOBILE_PRODUCT_MORE.classList.toggle('active')
// }
//
//
// function closeMenu() {
//     DESKTOP_MENU_PRODUCT_LIST.classList.remove('active')
//     PRODUCT_LIST.classList.remove('active')
//     PRODUCT_BTN.classList.remove('active')
//     MOBILE_PRODUCT_MORE.classList.remove('active')
//
// }
//
// //Прикрепить файл
// $(document).ready(function () {
//     $("#input__file").change(function () {
//         let filename = $(this).val().replace(/.*\\/, "");
//         $("#file-name").html(filename);
//         $('#file-name').css('paddingLeft', '10px')
//     });
// });
//
// $(document).ready(function () {
//     $("#input__file-modal").change(function () {
//         let filename = $(this).val().replace(/.*\\/, "");
//         $("#file-name-modal").html(filename);
//         $('#file-name-modal').css('paddingLeft', '10px')
//     });
// });
//
// //Поднятие соц сетей при достижении футера
// window.addEventListener('scroll', () => {
//     if (document.documentElement.clientWidth > 768) {
//         const FOOTER_LINE = document.querySelector('.navigate')
//         const BODY = document.querySelector('body')
//         const BODY_HEIGHT = BODY.clientHeight
//         const BROWSER_WINDOW_HEIGHT = document.documentElement.clientHeight
//         const FOOTER_HEIGHT = FOOTER_LINE.clientHeight
//         const SOCIAL_BLOCK = document.querySelector('.social')
//
//         if ( BODY_HEIGHT - BROWSER_WINDOW_HEIGHT - FOOTER_HEIGHT < window.pageYOffset) {
//
//             let heightBottomOffset = ((BODY_HEIGHT - BROWSER_WINDOW_HEIGHT - FOOTER_HEIGHT - window.pageYOffset) * -1)
//
//             SOCIAL_BLOCK.style.bottom = heightBottomOffset + 'px'
//
//         } else {
//             SOCIAL_BLOCK.removeAttribute('style')
//         }
//     }
// })
//
// mailSend()
//
