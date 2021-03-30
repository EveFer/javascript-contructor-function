
const containerContents = document.getElementsByClassName('tabs')
const btnMenu = document.getElementsByClassName('menu-option')

function handleClickBtn(btnSelected) {
    for (let i = 0; i < containerContents.length; i++) {
        if (parseInt(btnSelected) === i) {
            containerContents.item(i).classList.remove('hidden')
            btnMenu.item(i).classList.add('active')
        } else {
            containerContents.item(i).classList.add('hidden')
            btnMenu.item(i).classList.remove('active')
        }
    }
}

