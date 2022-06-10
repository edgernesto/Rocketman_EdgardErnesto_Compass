//SETIMO DESAFIO SOMA MULTIPLOS DE 3 E 5
//munha solução:

soma(15);

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

//solução do vídeo:
/*
somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0) {
            multiplosDe3 += i;
        }
        if (i % 5 === 0) {
            multiplosDe5 += i;
        }
    }
    console.log(multiplosDe3 + multiplosDe5);
}
*/
