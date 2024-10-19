let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == ''){
    lista.textContent = amigo.value;
    } else if(amigo.value == '') {
        alert('Erro! Digite um nomé válido.');
        return;
    } else{
        lista.textContent = lista.textContent +', '+ amigo.value;
    }
    amigo.value = '';
}

function sortear(){
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i <amigos.length; i++){
        // tem que comparar com amigos length - 1 para parar o loop, por causa do array, por começar com 0
        if(i == amigos.length - 1){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>' //br é break, que é pular uma linha
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML= '';
}