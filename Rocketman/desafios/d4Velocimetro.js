//QUARTO DESAFIO MEDIDOR DE VELOCIDADE
//minha soluçao:

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