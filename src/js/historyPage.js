import {HistoryItem} from "./CreateHistoryItem";
import {HistoryTab} from "./CreateHistoryTab";

export function historyPage() {

    const HISTORY_BLOCK = document.getElementById('history-block')
    const ITEM = document.querySelector('.history-tab-list').querySelectorAll('.item')
    const TAB_LIST = document.getElementById('tab-block__list')
    const BUTTON_BLOCK = document.getElementById('tab-block__headline')
    const NEXT_BTN = document.getElementById('next-btn')
    const PREV_BTN = document.getElementById('prev-btn')

    let historyItem

    //Создание таба из данных в заголовке страницы
    let itemCount = ITEM.length
    let itemMax = Math.ceil(itemCount/5)
    let itemCurrent

    window.addEventListener('click', (event) => {
        let element = event.target

        if (element.classList.contains('history-item')) {
            historyItem.forEach( (historyItem) => {
                historyItem.classList.remove('active')
            })
            element.classList.add('active')

            createHistory()

        }
    })


    NEXT_BTN.onclick = () => {
        itemCurrent++
        renderNewTab()
    }
    PREV_BTN.onclick = () => {
        itemCurrent--
        renderNewTab()
    }


    function historyItemCount() {
        historyItem = document.querySelectorAll('.history-item')
    }

    function createTab(itemCurrent) {
        TAB_LIST.innerHTML = ''
        let tabList = new HistoryTab(itemCurrent, itemCount)
        TAB_LIST.append(tabList.renderTab(itemCurrent, itemCount))
        historyItemCount()
    }

    function buttonSet() {
        if (itemCurrent === 1) {
            PREV_BTN.style.visibility = 'hidden'
        } else {
            PREV_BTN.style.visibility = 'visible'
        }

        if (itemCurrent === itemMax) {
            NEXT_BTN.style.visibility = 'hidden'
        } else {
            NEXT_BTN.style.visibility = 'visible'
        }
    }

    function setActiveTab() {
        historyItem[0].click()
    }

    function renderNewTab() {
        createTab(itemCurrent)
        buttonSet()
        setActiveTab()
    }

    function createHistory() {
        HISTORY_BLOCK.innerHTML = ''
        const historyBlock = new HistoryItem()
        HISTORY_BLOCK.append(historyBlock.renderHistory())
    }

    if (ITEM.length > 0) {
        itemCurrent = 1
        renderNewTab()
    }

    if (itemCount < 5) {
        BUTTON_BLOCK.style.visibility = 'hidden'
    }

}