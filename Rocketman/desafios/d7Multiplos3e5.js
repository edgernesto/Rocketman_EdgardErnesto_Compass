//SETIMO DESAFIO SOMA MULTIPLOS DE 3 E 5
//munha solução:

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
