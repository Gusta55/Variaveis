/*
//Exercicio 1

let a = 10//atribui o valor 10 para variavel a
let b = 10//atribui o valor 10 para variavel b

console.log(b) //printa o número 10 no console

b = 5//altera o valor da variavel b para 5
console.log(a, b)//printa o valor 10 e 5 no console


//Exercicio 2

let a = 10//atribui o valor 10 para a variavel a
let b = 20//atribui o valor 20 para a varaivel b
//não foi inicializada a variavel c
c = a//c recebe o valor de a = 10
b = c//b recebe o valor de c = 10
a = b//a recebe o valor de b = 20

console.log(a, b, c)//vai aparecer erro na tela pois não foi declarada a variavel c


//Exercicio 3

let p = prompt("Quantas horas você trabalha por dia?")//Sugestão de nome para variavel let horasTrablhadas
//prompt retorna em formato String
let t = prompt("Quanto você recebe por dia?")//Sugestão de nome para variavel let valorPorDia
//prompt retorna em formato String
alert(`Voce recebe ${t / p} por hora`)//cria um alerta na tela
//dividi as variaveis t e p e aparece o resultado
*/

//Exercicios de escrita de código
//EXERCICIO 1
/*
let nome;
let idade;
console.log("Nome é em formato", typeof(nome))
console.log("Idade é em formato", typeof(idade)) 
//retorna com valor indefinido undefined
*/

//EXERCICIO 2
/*
let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");
alert(`Olá ${nome}, você tem ${idade} anos`);
*/


//EXERCICIO 3
/*
let pergunta1 = prompt("Voce esta usando uma roupa azul hoje?");
let pergunta2 = prompt("Voce está usando uma roupa preta hoje?");
let pergunta3 = prompt("Voce esta usando um calçado preto?");

alert(`Voce esta usando uma roupa azul hoje? ${pergunta1}`);
alert(`Voce está usando uma roupa preta hoje? ${pergunta2}`);
alert(`Voce esta usando um calçado preto? ${pergunta3}`);
*/

//EXERCICIO 4
/*
let a = 10;
let b = 25;
let c = b;

b = a;
a = c;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/

//Opcional

let numero1 = prompt("Digite um número: ");
let numero2 = prompt("Digite outro número: ");
let soma = Number(numero1) + Number(numero2);
let mult = numero1 * numero2;
alert(`A soma de ${numero1} e ${numero2} é igual a ${soma}`);
alert(`A multiplicação de ${numero1} e ${numero2} é igual a ${mult}`);