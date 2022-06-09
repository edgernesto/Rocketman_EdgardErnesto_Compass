// SEGUNDO DESAFIO FUNÇÃO QUE USA DOIS NUMEROS, E RETORNA O MAIOR

//minha solução:

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

//solução do vídeo:
/*
let valorMaior = max(5,9);
console.log(valorMaior);

function max(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2 ;
};
*/
