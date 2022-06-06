// PRIMEIRO DESAFIO: TROCAR VALOR DAS VARIÁVEIS

//minha solução:
/*
let a = "azul";
let b = "vermelho";
function trocaCor(){
    a = "vermelho";
    b = "azul";
};

console.log(a);
console.log(b);

trocaCor();

console.log(a);
console.log(b);

// solução do video:

let a = "azul";
let b = "vermelho";
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
*/

// SEGUNDO DESAFIO FUNÇÃO QUE USA DOIS NUMEROS, E RETORNA O MAIOR

//minha solução:
/*
let num1;
let num2;
num1 = 4;
num2 = 4;
function maior(num1, num2){
    if (num1 > num2){
        console.log("O número maior é: " + num1);
    } else if (num2 > num1){
        console.log("O número maior é: " + num2);
    }else {
        console.log("Os números são iguais.");
    }
};
maior();
*/

//solução do vídeo:
/*
let valorMaior = max(5,9);
console.log(valorMaior);

function max(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2 ;
};
*/

//TERCEIRO DESAFIO FIZZBUZZ

//minha solução:
/*
const result = fizzBuzz();
console.log(result);

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 !== 0) {
        console.log("fizz");
    } else if (num % 5 == 0 && num % 3 !== 0) {
        console.log("Buzz");
    } else if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizzBuzz");
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return num;
    } else {
        console.log("nao é um número");
    }
};
*/

//solução do vídeo:
/*
const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}
*/

//QUARTO DESAFIO MEDIDOR DE VELOCIDADE
radar();

function radar(velocidade, pontos){
    if (velocidade <= 70){
        console.log("ok");
    }
}
