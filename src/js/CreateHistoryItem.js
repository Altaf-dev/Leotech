
export class HistoryItem {
    constructor() {

    }

    renderHistory() {

        const HISTORY_ITEM = document.querySelectorAll('.history-item')

        let selectedHistory

        HISTORY_ITEM.forEach( (HISTORY_ITEM) => {
            if (HISTORY_ITEM.classList.contains('active')) {
                selectedHistory = HISTORY_ITEM
            }
        })

        let headline = selectedHistory.getAttribute('data-headline')
        let date = selectedHistory.getAttribute('data-date')
        let image = selectedHistory.getAttribute('data-image')
        let descriptionOne = selectedHistory.getAttribute('data-description-1')
        let descriptionToo = selectedHistory.getAttribute('data-description-2')

        let template = ''

        let history = document.createElement('div');
        history.className = 'history-block'

        template += `<div class="wrap__text">`
        template += `<h2 class="headline">${headline}</h2>`
        template += `<p class="date">${date}</p>`
        template += `<p class="description">${descriptionOne}</p>`
        template += `</div>`
        template += `<div class="image-block">`
        template += `<img src="${image}" alt="Photo" class="photo">`
        template += `<img src="${image}" alt="Photo" class="shadow">`
        template += `</div>`
        template += `<div class="wrap__text">`
        template += `<p class="description">${descriptionToo}</p>`
        template += `</div>`

        history.innerHTML = template;

        return history;
    }
}

