
export class HistoryTab {
    constructor(itemCurrent, itemCount) {
        this.itemCurrent = itemCurrent
        this.itemCount = itemCount
    }

    renderTab() {

        const ITEM = document.querySelector('.history-tab-list').querySelectorAll('.item')

        let template = ''

        let historyTab = document.createElement('div');
        historyTab.className = 'history__item-wrap'

        let i = (this.itemCurrent - 1) * 5
        let itemStop

        if (this.itemCurrent * 5 < this.itemCount) {
            itemStop = this.itemCurrent * 5
        } else {
            itemStop = this.itemCount
        }

        for ( i; i < itemStop; i++) {

            let headline = ITEM[i].getAttribute('data-headline')
            let date = ITEM[i].getAttribute('data-date')
            let image = ITEM[i].getAttribute('data-image')
            let descriptionOne = ITEM[i].getAttribute('data-description-1')
            let descriptionToo = ITEM[i].getAttribute('data-description-2')

            template += `<div class="history-item"`
            template += `data-headline="${headline}"`
            template += `data-date="${date}"`
            template += `data-image="${image}"`
            template += `data-description-1="${descriptionOne}"`
            template += `data-description-2="${descriptionToo}">`
            template += `<div class="image">`
            template += `<img src="${image}" alt="Photo" class="photo">`
            template += `</div>`
            template += `<div class="description-block">`
            template += `<div class="history-headline">`
            template += `<h4 class="headline">${headline}</h4>`
            template += `</div>`
            template += `<p class="date">${date}</p>`
            template += `</div>`
            template += `</div>`
        }

        historyTab.innerHTML = template;

        return historyTab;
    }
}



