let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    amigo.value = amigo.value.charAt(0).toUpperCase() + amigo.value.slice(1).toLowerCase();
   
    if (amigo.value == ''){
        alert('Informe o nome do amigo');
        return;
    }

    if (amigos.includes(amigo.value)){
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if(amigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function excluirAmigo(){
    amigos.splice(index ,1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio(){
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML;

    for (let i =0; i < amigos.length; i++){
        let paragrafo = document.getElementById('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}



////////////////////////////////////////////////////////////////////////////


let minhaLista = [];

minhaLista.push(1, 2, 3);
console.log('Adicionar elemento: ', minhaLista);

let outrosNumeros = [4, 5, 6];

let novaLista = minhaLista.concat(outrosNumeros);
console.log('Juntando Arrays: ', novaLista);

novaLista.pop();
console.log('Desafio 4: ', novaLista);

function embaralhaArray(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

novaLista = embaralhaArray(novaLista);
console.log('Embaralhado a lista: ', novaLista);

function removerDuplicatas(array){
    return[...new Set(array)];
}

let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log('Remover duplicatas: ', novaListaSemDuplicatas);

function numeroPositivo(i){
    if (i > 0){
        return `o numero ${i} é positivo`;
    } else if (i < 0){
        return`o numero ${i} é negativo`;
    } else {
        return 'O núemro é zero';
    }
}

//console.log(numeroPositivo(prompt('Digite um numero')));

function maiorIdade (idade){
    return idade >= 18 ? `${idade} é Maior de idade` : `${idade} é Menor de idade`;
}
//console.log(maiorIdade((prompt('Qual sua idade'))));


function validarString(texto){
    return texto === '' ? 'String vazia' : 'String não vazia';
    }
console.log(validarString('Aqui há um texto?'));
console.log(validarString(''));

function verificarAnoBisexto(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        return 'Ano bisexto';
    } else {
        return 'Não é bisexto';
    }
}
//console.log(verificarAnoBisexto(prompt('Digite um ano para verificar se é bisexto')))

function calcularMedia(num1, num2){
    if(isNaN(num1)||isNaN(num2)){
        return 'Um dos números não é válido.';
    }
    return(num1 + num2)/2;
}
//numero01=(prompt('Digite o primeiro núemro'));
//numero02=(prompt('Digite o segundo núemro'));
console.log(calcularMedia(8, 5));

function obterTamanhoArray(arr){
    return arr.length;
}

const minhaLista1 = [1,2,3,4,5,6,7,8,9,10];
console.log(obterTamanhoArray(minhaLista1));

const meuArray = [10,20,30,40,50];
console.log('O array contém o número 30?', meuArray.includes(30));

function verificarElementoNoArray(arr, elemento){
    return arr.includes(elemento);
}

const meuArray1 = [10,20,30,40,50];
const elementoProcurado = 30;

const elementoEstaPresente = verificarElementoNoArray(meuArray1, elementoProcurado);

if (elementoEstaPresente){
    console.log(`O elemento ${elementoProcurado} está presente no array.`)
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`)
}

const palavras = ['apple', 'banana', 'orange', 'grape'];
console.log('A palavra banana está presente no array?', palavras.includes('banana'));

// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} else {
    console.log('O aluno não está presente no array.');
}

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);