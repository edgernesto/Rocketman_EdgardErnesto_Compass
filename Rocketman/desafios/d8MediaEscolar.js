//DESAFIO 8 CALCULAR NOTA ESCOLAR
//minha solução:

const array = [70, 70, 80]

function media() {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    if (soma / array.length <= 59) {
        console.log("F");
    } else if (soma / array.length > 59 && soma / array.length <= 69) {
        console.log("D");
    } else if (soma / array.length > 69 && soma / array.length <= 79) {
        console.log("C");
    } else if (soma / array.length > 79 && soma / array.length <= 89) {
        console.log("B");
    } else if (soma / array.length > 89 && soma / array.length <= 100) {
        console.log("A");
    } else {
        console.log("Cálculo incorreto, nota nao pode ser maior que 100");
    }
}
media();

//solução do video:

/*
const array = [70, 70, 80]
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return "F";
    if (media < 69) return "D";
    if (media < 79) return "C";
    if (media < 89) return "B";
    return "A";
}
function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma <= valor;
    }
    const media = soma / (array.length);
}
*/