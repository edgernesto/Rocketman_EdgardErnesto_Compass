//SEXTO DESAFIO ENCONTRE O STRING
//aprendi fazendo junto, nao consegui fazer sozinho de primeira

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