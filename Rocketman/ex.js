// EXERCÍCIO 1 VARIÁVEIS 
/*
const nome = "Edgard";
const altura = 1.85;
const miope = true;
console.log(nome, altura, miope);
*/

//EXERCÍCIO 2 OBJETOS
/*
const pessoa = {
    nome: "Edgard",
    sobrenome: "ernesto",
    idade: 24,
    miope: true,
    altura: 1.85,
    sexo: "masculino"
};
console.log(pessoa);
*/

//EXERCÍCIO 3 ARRAYS
/*
const nomeDoColega = ["joão", 20, true, "2002"];
console.log(nomeDoColega);
*/

//EXERCÍCIO 4 FUNÇÕES
/*
let gato = "miau";
function fome(barulho, fofura) {
    gato = barulho + " " + fofura;
};
console.log(gato);
fome("miau miau miau", "prurprur");
console.log(gato);
*/

//EXERCÍCIO 5 OPERADOR LOGICO
/*
let comendo = true;
let dormindo = true;
let souGato = comendo && dormindo;

console.log("sou um gato? ",souGato);

let naoSouGato = !souGato;
console.log("sou um gato?",naoSouGato);
*/

//EXERCICIO 6 IF ELSE
/*
let gato = "prur";

if (gato = "prur" || gato = "prurprur"){
    console.log("gato quer carinho");
} else if (gato = "miau miau" || gato = "miaaaaaaaaaaau"){
    console.log("gato está com fome.");
} else {
    console.log("gato está dormindo");
};
*/

//EXERCICIO 7 SWITCH CASE
/*
let gato;
gato = "miau";

switch (gato) {
    case "miau":
        console.log("gato está com fome");
        break;
    case "prur":
        console.log("gato quer carinho");
        break;
    default:
        console.log("gato está a mimir");
};
*/

//EXERCICIO 8 LOOP
//loop com for
/*
for (let numero = 0; numero <= 100; numero++) {
    if (numero % 2 !== 0){
        console.log("loop finito! impar", numero);
    } else {
        console.log("loop finito! par", numero);
    }
};
*/

//loop com while
/*
let numero = 0

while (numero <= 99){
    numero++
    if (numero % 2 !== 0){
        console.log("loop finito! impar", numero);
    } else {
        console.log("loop finito! par", numero);
    }
};
*/

//loop com do..while
/*
numero = 0;
do {
    numero++
    if (numero % 2 !== 0) {
        console.log("loop finito! impar", numero);
    } else {
        console.log("loop finito! par", numero);
    }
} while (i <= 99);
*/

//loop com for..in
const cores = ["vermelho", "verde", "azul"]

for (let indice in cores) {
    console.log(indice);
};
//EXERCICIO 9

