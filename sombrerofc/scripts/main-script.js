function clickMenu() {
    if (itens.style.display == 'block') {
    itens.style.display = 'none'
    } else {
    itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
    itens.style.display = 'block'
    account_circle.style.display = 'inline'
    } else {
    itens.style.display = 'none'
    account_circle.style.display = 'none'
    }
}