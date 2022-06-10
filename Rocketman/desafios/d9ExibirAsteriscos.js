//DESAFIO 9 EXIBIR ASTERISCOS 

//minha solução:

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    let ast = "";
    for (let linha = 1; linha <= linhas; linha++) {
        ast += "*";
        console.log(ast);
    }
}

//solução do video:
/*
exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    let padrao = "";
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += "*";
    }
    console.log(padrao);
}
*/