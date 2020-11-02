
export function aboutPage() {

    $('.second__slider').slick({
        centerMode: true,
        slidesToShow: 3,
        autoplay:false,
        variableWidth: true,
        arrow: true,
    });

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


    //Переход по странице на блок с сертификатами
    const CERTIFICATE_BTN = document.querySelector('.fist__certificate-btn')

    CERTIFICATE_BTN.onclick = () => {
        location.href = '#slider-certificate'
    }
}