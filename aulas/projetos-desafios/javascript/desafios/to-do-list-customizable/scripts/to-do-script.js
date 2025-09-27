var item = document.getElementById('task-input');
var showRemoveBtn = 0;

function add() {
    var list = document.getElementById('task-list');
    var valor = item.value.trim();
    if (valor === '') {
        item.value = '';
        item.focus();
        return;
    }
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    var texto = document.createElement('span');
    texto.textContent = valor;
    texto.style.cursor = 'pointer';
    texto.onclick = null;
    texto.ondblclick = function() {
        list.removeChild(li);
    };
    li.appendChild(texto);
    list.appendChild(li);
    item.value = '';
    item.focus();
}

