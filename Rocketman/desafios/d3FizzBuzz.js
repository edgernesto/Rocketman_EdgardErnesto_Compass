//TERCEIRO DESAFIO FIZZBUZZ

//minha solução:

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