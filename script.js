// console.log() mostra uma informação no console
console.log("Olá, Mundo!");
console.log("20");

//fala o tipo da linguagem
console.log(typeof "Olá, Mundo!"); //string
console.log(typeof 20); //number
console.log(typeof 10.5); //number
console.log(typeof true); //boolean
console.log(typeof false); //boolean

//váriavel
//const não pode ter seu valoralterado durante programa
const nome = "Stellar";
console.log(nome);

//let podeter seu valor alterado durante o programa
let idade = 20;
console.log(idade);

console.log(`Olá ${nome}, que tem ${idade} anos.`);


idade = 21;
console.log(idade);

console.log(`Olá ${nome}, que tem ${idade} anos.`);
console.log(`Olá ${nome} ", que tem " + idade + " anos."`);

// Antes

let nome1 = "Camila";
console.log(nome1);

let peso = 60;
console.log(peso);

console.log(`Olá ${nome1}, que tem ${peso} kg.`);

// Depois

nome1 = "Lalin";
console.log(nome1);

peso = 55;
console.log(peso);

console.log(`Olá ${nome1}, que tem ${peso} kg.`);

//Métodos de string
const texto = "pneumoultramicRoscopicossilicOvulcanoConiótico";

console.log(texto.length); //conta a quantidade de caractere da string
console.log(texto.toUpperCase()); //deixa tudo maiusculo
console.log(texto.toLowerCase()); //altera a string para minúsculo

const nomeCompleto = "Camila Ferreira Da Silva";
console.log(nomeCompleto.includes("Silva"))

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log("10" == 10); // true (número é igual a número)
console.log("10" === 10); // false (texto é igual a número)
console.log(10 !== 5); // true (5 é diferente (!) a 10)

const idadePessoa = 20;

console.log(idadePessoa >= 21); //false
console.log(idadePessoa >= 19); //true

console.log(nomeCompleto == "camila ferreira da silva"); //false
console.log(nomeCompleto == "CAMILA FERREIRA DA SILVA"); //false
console.log(nomeCompleto == "Camila Ferreira Da Silva"); //true
console.log(nomeCompleto !== "Camila Ferreira Da Silva"); //false
console.log(nomeCompleto !== "camila ferreira da silva"); //true


// Algoritimo

// passo a passo a ser realizados, maneira de organizar para se fazer essa tarefas, passo lógico

//coletamos a idade da pessoa
let pessoaIdade = 19;
// verificar se a idade é maior ou igual que 18
if (pessoaIdade >= 18) {
    // se maior ou igual a 18 então ela é maior de idade
    console.log('Já Poder Ser Preso HAHAHAHAHAHA!')
} else {// o else sempre vem depois do if
    const newLocal = "Não vai psrs s balada ";
    // senão, ela é menor de idade
    console.log("Não vai pra balada!🤣🤣🤣")
}

// coletamos a idade da pessoa
let idadeVotacao = 16
// verificar se a pessoa é maior ou igual a 70
if (idadeVotacao > 70) {
    console.log("Você não é obrigado e  votar")
} else if (idadeVotacao >= 18) { // else if serve para continuar uma opção e quando for a opção final se usa apenas o else
    // senão, se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
} else if (idadeVotacao >= 16) {
    // senão, se a idade da pessoa for maior ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queire pode!")
} else {
    // senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}




// JavaScript — Exercícios de Condicionais 

// Parte 1 — Decisões simples

// 01 — Aprovação escolar
// Receba a média final de um aluno. Se a média for maior ou igual a 7, informe "Aprovado". Caso contrário, informe "Reprovado".

let Média = 7
// verificar se a nota é maior ou igual a 7
if (Média >= 7) {
    console.log("Aprovado!")
} else {
    // se a nota for menor que 7
    console.log("Reprovado!")
}


// 02 — Comparação de dois números
// Receba dois números e informe qual deles é o maior. Se os dois forem iguais, informe que houve empate.

let Vermelho = 8
let Azul = 4
// verificar Qual dos dois números é maior
if (Vermelho > Azul) {
    console.log("Vermelho Venceu!")
} else if (Azul > Vermelho) {
    console.log("Azul Venceu!")
} else {
    console.log("Empate!")
}


// 03 — Verificação de senha
// Receba uma senha e verifique se ela é igual a senai123. Se for igual, exiba "Acesso autorizado". Caso contrário, exiba "Senha incorreta".

let Senha = "senai12"

if (Senha == "senai123") {
    console.log("Acesso autorizado!")
} else {
    console.log("Senha incorreta!")
}


// Parte 2 — Múltiplos caminhos

// 04 — Classificação de temperatura
// Receba uma temperatura em graus Celsius e classifique-a:

// - Abaixo de 18 °C: "Frio".
// - De 18 °C até 27 °C: "Agradável".
// - Acima de 27 °C: "Quente".

let Graus = 10
if (Graus < 18) {
    console.log("Frio")
} else if (Graus > 27) {
    console.log("Quente")
} else {
    console.log("Agradável")
}


// 05 — Classificação de nota
// Receba uma nota de 0 a 10 e apresente:

// - A partir de 9: "Excelente".
// - A partir de 7 e abaixo de 9: "Bom".
// - A partir de 5 e abaixo de 7: "Regular".
// - Abaixo de 5: "Insuficiente".

let Nota = 7
if (Nota >= 9) {
    console.log("Excelente")
} else if (Nota >= 7) {
    console.log("Bom")
} else if (Nota >= 5) {
    console.log("Regular")
} else {
    console.log("Insuficiente")
}


// 06 — Dia da semana
// Receba um número inteiro de 1 a 7 e exiba o dia da semana correspondente. Considere 1 como domingo e 7 como sábado. Para qualquer outro número, exiba "Dia inválido".

let Dia = 6
if (Dia == 1) {
    console.log("Domingo")
} else if (Dia == 2) {
    console.log("Segunda")
} else if (Dia == 3) {
    console.log("Terça")
} else if (Dia == 4) {
    console.log("Quarta")
} else if (Dia == 5) {
    console.log("Quinta")
} else if (Dia == 6) {
    console.log("Sexta")
} else if (Dia == 7) {
    console.log("Sábado")
} else {
    console.log("Dia inválido")
}


// Aula - Dia 20 de Outubro 2026

// Verificar se a pessoa pode dirigir

let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

if (idadeDirigir >= 18 && temCNH == true && temCarro == true) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}


// Verificar se a pessoa tem direito a meia entrada

let ehProfessor = false;
let ehAluno = false;

// é = eh
// || = ou
// && = e

if (ehProfessor == true || ehAluno == true) {
    console.log("Você tem direito a meia entrada!")
} else {
    console.log("Você não tem direito a meia entrada!")
}


// JavaScript — Exercícios de Condicionais COM && e ||

// Parte 1 — Operador E (&&)
// Receba um número e informe se ele está entre 10 e 50, inclusive. Caso contrário, informe que está fora do intervalo.

let Número = 48

if (Número > 10 && Número < 50) {
    console.log("Dentro do intervalo")
} else {
    console.log("Fora do intervalo")
}


// 02 — Elegibilidade para estágio
// Uma oportunidade de estágio é destinada a candidatos com idade entre 16 e 24 anos, inclusive. Receba a idade e informe se o candidato atende ao requisito.

let idadeCandidato = 20

if (idadeCandidato > 16 && idadeCandidato < 24) {
    console.log("Atende ao requesito")
} else {
    console.log("Não atende ao requesito")
}


// Parte 2 — Operador OU (||)

// 03 — Frete grátis
// Uma loja oferece frete grátis para clientes que realizam compras de R$ 200 ou mais ou que são assinantes. Receba o valor da compra e uma variável booleana indicando se o cliente é assinante. Informe se ele tem direito ao frete grátis.

let assinante = true
let compra = 150

if(assinante == true || compra >= 200){
    console.log("Direito a frete grátis!")
}else{
    console.log("Sem direito a frete grátis!")
}


// 04 — Dia de descanso
// Receba o nome de um dia da semana. Se for sábado ou domingo, exiba "Fim de semana". Caso contrário, exiba "Dia útil".

let diaSemanal = "Terça"

if(diaSemanal == "Sábado" || diaSemanal == "Domingo"){
    console.log("Fim de semana!")
}else{
    console.log("Dia útil")
}


// Parte 3 — Combinando E e OU

// 05 — Promoção especial
// Uma loja aplica **15% de desconto** se o cliente:

// - Realizar uma compra de **R$ 150 ou mais** **e** for assinante; **ou**
// - Possuir um cupom promocional válido, independentemente de ser assinante.

// Receba o valor da compra e duas variáveis booleanas (assinante e cupom válido). Informe se o desconto será aplicado e apresente o total final.

let compraLoja = 300
let assinanteLoja = true
let cupomPromocional = false
let valorFinal = compraLoja * 0.85


if(compraLoja >= 150 && assinanteLoja == true || cupomPromocional == true){
    console.log(`Desconto de 15%, valor de R$ ${valorFinal}.`)
}else{
    console.log(`Sem desconto, valor de R$ ${compraLoja}.`)
}

