/*Exercicio 1

var numero1 = 10;
var numero2 = 20;

console.log (`Soma: ${numero1 + numero2}, Subtração: ${numero1 - numero2}, Multiplicação: ${numero1 * numero2} e Divisão: ${numero1 / numero2}`);
*/

//------------------------------//

/*Exercicio 2

var idade = 19;
const nome = "Alexandre";

console.log(`Olá, meu nome e ${nome} e eu tenho ${idade} anos`);
*/

//-----------------------------//

/* Exercicio 3

function saudacao(nome){
    return (`Olá, ${nome} sejá bem vindo(a)!`)
}

console.log(saudacao("Alexandre"));
*/

//----------------------------//

/*
function apresentação(nome, idade){
    console.log(`Olá meu nome é ${nome} e minha idade é ${idade}`);
    let decimal = 5.41;
    let inteiro = 12;
    let string = "Eu estou aprendendo programção com meu amigo GPT"

    if (decimal > 10) {
        console.log('Decimal é maior que 10');
    } else {
        console.log('Decimal é menor ou igual a 10');
    }

    console.log(typeof decimal);
    console.log(typeof inteiro);
    console.log(typeof string);

}

apresentação('Alexandre', 19);
*/

//-----------------------------

/*
var numeros = [10,50,7,17,3];
function somaArray (numeros){
    let soma = 0;

    for (i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma
}
*/

//------------------------------

/*
var numeros = [10,50,7,17,3];
function somaArray (numeros){
    let soma = 0;

    numeros.forEach(function (numeros) {
        soma += numeros
    });
    return soma
}

console.log(somaArray(numeros));
*/

//---------------------------------

/*

const pessoa = [
    {nome:'Alexandre', idade: 15, profissão: 'Programador'},
    {nome:'Alex', idade: 34, profissao: 'Programador'},
    {nome:'Mayco', idade: 59, profissao: 'Programador'}

]

function filtraPessoas (pessoa, minimaIdade){
    const filtradas = pessoa.filter(function(pessoa) {
        return pessoa.idade >= minimaIdade
    })

    filtradas.forEach(function (pessoa) {
        console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
        
    });
}
filtraPessoas(pessoa, 18);
*/

//----------------------

/*

let nome = 'Alexandre';
let idade = 19;
let hobbies = ['Joga games', 'programa', 'Assistir'];

if (idade >=18) {
    console.log('Voce é maior de idade');
} else {
    console.log('Você é menor de idade');
}
hobbies.forEach (function(hobbies){
    console.log (`Hobbies: ${hobbies}`);
})

*/


//------------------------

/*
function validaEntrada (){
    let nome= prompt('Digite seu nome');
    let idade= prompt('Digite sua idade');

    if (!nome) {
        console.log('Erro: o Campo de nome não pode ser vazio.');
        return
    }
    
    idade = parseInt(idade);
    if (isNaN(idade) || idade <= 0 ) {
        console.log('Erro: o Campo de idade deve ser um numero valido maior que zero.');
        return
    }
    
    alert(`Bem vindo, ${nome}. Você tem ${idade} anos!`);
}

validaEntrada()
*/

//-----------------------

/*
let listaArray = [1,2,3,4,5,6,7,8,9,10,11,12];

function separaImp_Par(Array){
    let par = [];
    let impar = [];

    for (let i = 0; i < Array.length; i++){
        if (Array[i]%2===0 ) {
            par[i] = Array[i];
        } else {
            impar[i] = Array[i];
        }
    }
    console.log (`Numéros Pares: ${par} ; Numeros Impares: ${impar}`);
}

separaImp_Par(listaArray);
*/

//-----------------------------

let nome = 'Alexandre';

function cont_vogais(palavra) {

}