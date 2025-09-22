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

// Obter o elemento HTML pelo ID
const elementoData = document.getElementById('data-atual');

// Criar um novo objeto Date para obter a data e hora atuais
const dataAtual = new Date();

// Obter os componentes da data
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1; // Adicionar 1, pois os meses são baseados em zero (0-11)
const ano = dataAtual.getFullYear();

// Construir a string da data (ex: 20/09/2025)
const dataFormatada = `${dia}/${mes}/${ano}`;

// Inserir a data formatada no elemento HTML
elementoData.textContent = `(${dataFormatada})`;
