// Lenfe é uma propiedade de um Objeto

const motorista = {
    idade: 18, // Dentro do objeto é : e não =
    temCNH: true, // Dentro tem que colocar , para separa de outras características
    temCarro: false 
}

// Consegue altera a propriedade mesmo sendo const por ser um objeto

console.log(motorista)


motorista.idade = motorista.idade + 1;
motorista.idade++;
motorista.idade += 1; // Forma mais fácil

motorista.temCNH = false;
motorista.temCarro = true

console.log(motorista)


// 22/10 - Aula 35 - JavaScript
// Objetos
// Laços de Repetição
// Listas
// Funções

// 01 - Dados de um produto
// Crie um objeto chamado produto com as propriedades nome, marca, preco e disponivel. Exiba separadamente o nome e o preço do produto no console.

// Vivara

const pulseira = {
    nome: "Pulseira Sirena em Ouro Rosé",
    marca: "Vivara",
    preço: 39.550,
    disponivel: true
}

// Compra

const descontoAvista = true;
let cupomPromocional = true;
let compraLoja = pulseira.preço;
let valorFinal2 = compraLoja * 0.85 && compraLoja * 0.85;
let valorFinal1 = compraLoja * 0.85;

if(cupomPromocional == true && descontoAvista == true){
    console.log(`Desconto à vista de 15% e cupom de desconto de 15%! No produto ${pulseira.nome} da ${pulseira.marca}`)
    console.log(`R$${valorFinal2}.`)
}else if(descontoAvista == true){
    console.log(`Desconto à vista de 15%!`)
    console.log(`R$${valorFinal1}.`)
}else if(cupomPromocional == true){
    console.log(`Cupom de desconto de 15%!`)
    console.log(`R$${valorFinal1}.`)
}else{
    console.log(`R$${compraLoja}.`)
}


// Laço de Repetição
// for(let contador = 0; contador < 67667; contador++){
//     console.log(contador)
// }


// 02 - Tabuada
// Receba um número inteiro em uma variável e exiba sua tabuada de multiplicação de 1 a 10.

for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x1 = ${1 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x2 = ${2 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x3 = ${3 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x4 = ${4 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x5 = ${5 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x6 = ${6 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x7 = ${7 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x8 = ${8 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x9 = ${9 * mediador}`)
}
for(let mediador = 1; mediador <= 10 ; mediador++){
    console.log(`${mediador}x10 = ${10 * mediador}`)
}

// Outras forma de fazer

let numero = 38;

for(let contador = 1; contador <= 10; contador++){
    console.log(`${contador} x ${numero} = ${contador * numero}`)
}

let contador = 1;
let numeroWhile = 12;

while(contador <= 10){
    console.log(contador * numeroWhile);
    contador++;
}

// 03 - Contagem Regressiva
//Exiba os números pares 20 até 0, em ordem decrescente

let number = 0

while(number > 0){
    console.log (`while: ${number}`);
    number -= 2
}

let number2 = 0

do{
    console.log(`do while: ${number2}`)
    number2 -= 2
}while(number > 0);


// 04 - Contagem Regressiva
// Exiba os números inteiros de 10 até 1 e, em seguida, a mensagem "Fim da contagem".

let Batata = 10

do{
    console.log(`do while:${Batata}`)
    Batata--
}while(Batata >=1){
    console.log(`Fim da contagem`)
}

//Listas

const frutas = ["Maçã","Banana", "Uva"];

frutas[0] = "Pera"

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[2]);


console.log(frutas.length);


frutas.push("Manga") // Adiciona na lista

console.log(frutas)

frutas.pop() // Tira a ultimo item que está na lista

console.log(frutas)

frutas.sort()

console.log(frutas)

//Funções
function somar(numero1, numero2){
    console.log(`A soma dos números é ${numero1 = numero2}`)
}

somar(1,1);
somar(6,7);

function somar(numero1, numero2){
   return numero1 + numero2; // Ele vai deixa guardado dentro de soma, então sempre a soma vai ser 2
}

const soma = somar(1,1);
console.log(soma);
somar(6,7);

function dividir(numero1, numero2){
     console.log(`${numero1} / ${numero2} ${numero1/numero2}`)
}

dividir(100,2);


// 01 — Adicionando elementos
// Crie uma lista chamada jogos com 3 jogos. Adicione mais 2 jogos ao final da lista e exiba o resultado no console.

const jogos = ["The Last of Us","Hollownight", "League of Legends"];

console.log(jogos);

jogos.push("Silent Hill");
jogos.push("Resident Evil");

console.log(jogos);


// 02 — Removendo o último item
// Crie uma lista chamada materiais com 5 materiais escolares. Remova o último elemento e exiba a lista atualizada. Em seguida, exiba quantos elementos restaram.

const materias = ["Lápis", "Borracha", "Caneta", "Apontador", "Caderno"];

console.log(materias);

materias.pop();
materias.pop();

console.log(materias);


// 03 — Saudação personalizada
// Crie uma função chamada saudar que receba o nome de uma pessoa como parâmetro e exiba uma saudação contendo esse nome. Execute a função com dois nomes diferentes.

function saudar(pessoa1, pessoa2){
    console.log(`Seja bem-vindo! ${pessoa1} e ${pessoa2}.`)
}

saudar ("Pedro", "João")


// 04 — Calculando o dobro
// Crie uma função chamada dobro que receba um número, retorne o dobro desse valor e permita que o resultado seja exibido no console. Teste a função com três números diferentes.

function dobro(numero){
    console.log(`O dobro do número é ${numero}`)
}

dobro (5)
dobro (8)
dobro (6)