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


