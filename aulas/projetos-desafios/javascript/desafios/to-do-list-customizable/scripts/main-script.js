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
    texto.onclick = function() {
        let aviso = li.querySelector('.aviso-duplo');
        if (!aviso) {
            aviso = document.createElement('span');
            aviso.className = 'aviso-duplo';
            aviso.textContent = 'Clique duas vezes para apagar';
            aviso.style.marginLeft = '12px';
            aviso.style.color = 'red';
            aviso.style.fontSize = '0.9em';
            aviso.style.background = '#fff6';
            aviso.style.padding = '2px 8px';
            aviso.style.borderRadius = '6px';
            li.appendChild(aviso);
            setTimeout(() => {
                if (aviso) aviso.remove();
            }, 2500);
        }
    };
    texto.ondblclick = function() {
        list.removeChild(li);
    };
    li.appendChild(texto);
    list.appendChild(li);
    item.value = '';
    item.focus();
}

