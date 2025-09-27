**PRINCIPAIS MÉTODOS**
-----------------------

**No-DOM:**
**window.alert(' aleatória_')** => Serve para gerar um alerta na tela do user com a mensagem que você escreveu (o alerta é aquela janelinha que aparece quando da erro);

**window.confirm**('_mensagem aleatória_') => Serve para gerar uma janela na tela do user, com a mensagem que você escreveu, mas, ele tem que confirmar ou negar, para tirar a janela;

**window.prompt**('_mensagem aleatória_') => Serve para gerar uma janela na tela do user, com a mensagem que você escreveu e uma caixa de texto (sem definição se será txt ou num);

**window.number**('_mensagem aleatória_') => Serve para gerar uma janela na tela do user, com a mensagem que você escreveu, mas, ele tem que digitar na caixa de texto, um número

-----------------------

**DOM:**
**window.getElementByTagName('_tag do elemento_')[ '_indice_' ]** => Serve para armazenar em uma variável o elemento selecionado pela _tag_ e qual é este elemento especificamente, selecionado pelo _indice_ (EX: var p1 = window.document.getElementsByTagName('p')[ 0 ] / assim, a variável _p1_, vai receber e armazenar nela, o primeiro [por causa do índice _0_] parágrafo, ou _p_ [por causa da tag _p_], da página);

**window.getElementById('_id do elemento_')** => Serve para armazenar em uma variável o elemento selecionado pelo _id_, predeterminádo préviamente (EX: var d = document.getElementById('msg') / assim, a variável _d_, vai receber e armazenar nela, o elemento que tiver o id _msg [por causa do id do elemento _msg_]);

