//DESAFIO 10 EXIBIR NUMEROS PRIMOS
//minha solução:

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite) {
    for (let num = 0; num <= limite; num++) {
        let primo = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            console.log(num);
        }
    }
}

//solução do video:
/*
exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}
*/
