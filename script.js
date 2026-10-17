// console.log() mostra uma informação no console
console.log("Olá, Mundo!");
console.log("20");

//fala o tipo da linguagem
console.log (typeof "Olá, Mundo!"); //string
console.log (typeof 20); //number
console.log (typeof 10.5); //number
console.log (typeof true); //boolean
console.log (typeof false); //boolean

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
if(pessoaIdade >= 18){
    // se maior ou igual a 18 então ela é maior de idade
    console.log('Já Poder Ser Preso HAHAHAHAHAHA!')
}else{// o else sempre vem depois do if
    const newLocal = "Não vai psrs s balada ";
    // senão, ela é menor de idade
    console.log("Não vai pra balada!🤣🤣🤣")
}

// coletamos a idade da pessoa
let idadeVotacao = 16
// verificar se a pessoa é maior ou igual a 70
if(idadeVotacao > 70){
    console.log("Você não é obrigado e  votar")
}else if(idadeVotacao >= 18){ // else if serve para continuar uma opção e quando for a opção final se usa apenas o else
    // senão, se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
}else if(idadeVotacao >=16){
    // senão, se a idade da pessoa for maior ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queire pode!")
}else{
    // senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}




// JavaScript — Exercícios de Condicionais 

// Parte 1 — Decisões simples

// 01 — Aprovação escolar
// Receba a média final de um aluno. Se a média for maior ou igual a 7, informe "Aprovado". Caso contrário, informe "Reprovado".

let Média = 7
// verificar se a nota é maior ou igual a 7
if(Média >= 7){
    console.log("Aprovado!")
}else{
    // se a nota for menor que 7
    console.log("Reprovado!")
}


// 02 — Comparação de dois números
// Receba dois números e informe qual deles é o maior. Se os dois forem iguais, informe que houve empate.

let Vermelho = 8
let Azul = 4
// verificar Qual dos dois números é maior
if(Vermelho > Azul){
    console.log("Vermelho Venceu!")
}else if(Azul > Vermelho){ 
    console.log("Azul Venceu!")
}else {
    console.log("Empate!")
}


// 03 — Verificação de senha
// Receba uma senha e verifique se ela é igual a senai123. Se for igual, exiba "Acesso autorizado". Caso contrário, exiba "Senha incorreta".

let Senha = "senai12"

if(Senha == "senai123"){
    console.log("Acesso autorizado!")
}else { 
    console.log("Senha incorreta!")
}


// Parte 2 — Múltiplos caminhos

// 04 — Classificação de temperatura
// Receba uma temperatura em graus Celsius e classifique-a:

// - Abaixo de 18 °C: "Frio".
// - De 18 °C até 27 °C: "Agradável".
// - Acima de 27 °C: "Quente".

let Graus = 10
if(Graus < 18){
    console.log("Frio")
}else if(Graus > 27){ 
    console.log("Quente")
}else {
    console.log("Agradável")
}


// 05 — Classificação de nota
// Receba uma nota de 0 a 10 e apresente:

// - A partir de 9: "Excelente".
// - A partir de 7 e abaixo de 9: "Bom".
// - A partir de 5 e abaixo de 7: "Regular".
// - Abaixo de 5: "Insuficiente".

let Nota = 7
if(Nota >= 9){
    console.log("Excelente")
}else if(Nota >= 7){ 
    console.log("Bom")
}else if(Nota >= 5){
    console.log("Regular")
}else {
    console.log("Insuficiente")
}


// 06 — Dia da semana
// Receba um número inteiro de 1 a 7 e exiba o dia da semana correspondente. Considere 1 como domingo e 7 como sábado. Para qualquer outro número, exiba "Dia inválido".

let Dia = 6
if(Dia == 1){
    console.log("Domingo")
}else if(Dia == 2){ 
    console.log("Segunda")
}else if(Dia == 3){ 
    console.log("Terça")
}else if(Dia == 4){ 
    console.log("Quarta")
}else if(Dia == 5){ 
    console.log("Quinta")
}else if(Dia == 6){ 
    console.log("Sexta")
}else if(Dia == 7){ 
    console.log("Sábado")
}else {
    console.log("Dia inválido")
}






