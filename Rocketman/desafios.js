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
//minha soluçao:
/*
radar(70);

function radar(velocidade) {
    if (velocidade <= 70) {
        console.log(velocidade);
    } else {
        const pontos = ((velocidade - 70) / 5);
        if (pontos >= 12) {
            console.log("carteira suspensa");
        } else {
            console.log("pontos: ", pontos);
        }
    }
}
*/

//solução do video:
/*
verificarVelocidade(85);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) {
        console.log("Ok");
    } else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if (pontos >= 12) {
            console.log("carteira suspensa")
        } else {
            console.log("pontos", pontos)
        }
    }
}
*/

//QUINTO DESAFIO PAR OU IMPAR
//minha solução:
/*
parOuImpar(77);

function parOuImpar(numFinal) {
    for (let num = 0; num <= numFinal; num++) {
        if (num % 2 == 0) {
            console.log(num + " é par!")
        } else {
            console.log(num + " é impar!")
        }
    }
}
*/

//solução do video:
/*

igual a minha, finalmente

*/

//SEXTO DESAFIO ENCONTRE O STRING
//aprendi fazendo junto, nao consegui fazer sozinho de primeira
/*
const caixa = {
    tamanho: "90cm",
    tipo: "caixa de copos",
    copos: "vidro",
    nCopos: 15
}
conteudo(caixa);
function conteudo(caixa) {
    for (propriedade in caixa) {
        if (typeof caixa[propriedade] === "string") {
            console.log(propriedade, caixa[propriedade])
        }
    }
}

*/

//SETIMO DESAFIO SOMA MULTIPLOS DE 3 E 5
//munha solução:
/*
soma(15)

function soma(numFinal) {
    let mult3 = 0;
    let mult5 = 0;
    let resultFinal = 0;
    for (let num = 0; num <= numFinal; num++) {
        if (num % 3 === 0) {
            mult3 = num + mult3;
        } else if (num % 5 === 0) {
            mult5 = num + mult5;
        }
        const result = mult3 + mult5
        resultFinal = result;
    }
    console.log(resultFinal);
}
*/