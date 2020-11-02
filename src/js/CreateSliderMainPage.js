export class SliderMainPage {
    constructor() {

    }

    renderSlider() {

        const TAB_ITEM = document.querySelectorAll('.tab-item')
        const BUTTON_SALE = document.getElementById('button-sale')
        let activeTab

        TAB_ITEM.forEach((TAB_ITEM) => {
            if (TAB_ITEM.classList.contains('active')) {
                activeTab = TAB_ITEM.querySelectorAll('.data-slider')
            }
        })

        let template = ''

        let mainSlider = document.createElement('div');
        mainSlider.className = 'slider-block'

        for (let i = 0; i < activeTab.length; i++) {

            let headline = activeTab[i].getAttribute('data-headline')
            let name = activeTab[i].getAttribute('data-name')
            let image = activeTab[i].getAttribute('data-image')

            template += `<div class="slider-item">`
            template += `<div class="image-block" data-image="${image}"></div>`
            template += `<div class="card">`
            template += `<div class="card__description">`
            template += `<div class="text-block">`
            template += `<p class="category">${name}</p>`
            template += `<h2 class="headline product-link" data-link="./products" data-headline="${headline}">${headline}</h2>`
            template += `</div>`
            template += `</div>`
            template += `<div class="card__btn-block">`
            template += `<button class="btn-card modal-sale" data-subject="Заказ продукции" data-product="Клиента интерисует - ${headline}" data-headline="${BUTTON_SALE.getAttribute('data-headline')}" >${BUTTON_SALE.innerText}</button>`
            template += `<div class="icon product-link" data-link="./products" data-headline="${headline}">`
            template += `<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>icons / arrow / standard</title>
                      <g id="icons-/-arrow-/-standard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="icons-/-arrow">
                          <rect id="Rectangle" fill-opacity="0" fill="#D8D8D8" x="0" y="0" width="30" height="30"></rect>
                          <path
                              d="M17.6582222,9.20970461 L17.7524295,9.29289322 L22.7524295,14.2928932 C22.7803149,14.3207786 22.806561,14.3503032 22.831011,14.3813101 L22.7524295,14.2928932 C22.7878236,14.3282873 22.8200098,14.3656744 22.8489882,14.4046934 L22.9206516,14.5159379 L22.970074,14.6187427 L23.0072508,14.7260359 L23.030051,14.8253458 L23.0435717,14.9406356 L23.0425349,15.0752385 L23.0300415,15.1747075 L23.0031653,15.2880006 L22.9701055,15.3811844 L22.9370609,15.4530333 L22.8896348,15.5360882 L22.825634,15.625449 L22.7524295,15.7071068 L17.7524295,20.7071068 C17.3619052,21.0976311 16.7287402,21.0976311 16.338216,20.7071068 C15.977732,20.3466228 15.9500025,19.7793918 16.2550273,19.3871006 L16.338216,19.2928932 L19.63,16 L7.07714561,16 C6.52486086,16 6.07714561,15.5522847 6.07714561,15 C6.07714561,14.4871642 6.4631858,14.0644928 6.96052448,14.0067277 L7.07714561,14 L19.631,14 L16.338216,10.7071068 C15.9476917,10.3165825 15.9476917,9.68341751 16.338216,9.29289322 C16.6686596,8.96244959 17.1728282,8.91161211 17.5567257,9.14038077 L17.6582222,9.20970461 Z"
                              id="Combined-Shape" class="arrow" fill-rule="nonzero"></path>
                        </g>
                      </g>
                    </svg>`
            template += `</div>`
            template += `</div>`
            template += `</div>`
            template += `</div>`
        }


        mainSlider.innerHTML = template;

        return mainSlider;
    }
}



