var div = document.getElementById('frase');
var rodou = document.getElementById('teste');
vai = document.getElementById('vai');
var vai = 0;

var teste = 'funcionou';
 
function testando() {
    vai = 2;
    div.innerHTML += `<p>${vai}</p>`;
}

div.innerHTML += `<p>${teste}</p>`;

rodou.innerHTML += `<p>rodou</p>`;