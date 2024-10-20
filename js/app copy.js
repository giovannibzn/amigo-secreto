function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
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
    
}

//teste para ver sincronização
//fazer dar conflito
//cancelamos o commit com reset 
//agora erramos no comentário