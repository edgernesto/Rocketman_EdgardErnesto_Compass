para começar, abra o arquivo home.html em live server(extensao do vscode)
dentro do arquivo home voce pode comentar as linhas dos scripts que vc nao quer ver no navegador, para o console mais limpo.

o arquivo ex.js são somente exercícios para fixação.

A pasta Rocketman é focada em meus estudos pessoais e desafios para aprendizado, tudo o que vai encontrar aqui, são anotações pessoais sobre meus estudos

VARIÁVEIS:

constantes(const) constantes nao podem mudar o valor.
sempre usar (const), usar (let) somente se o valor tiver que ser alterado

tipos primitivos:
let nome = "Edgard"; //string literal
let idade = 24; //number literal
let aprovado = true; //boolean
let sobrenome = undefined; //undefined
let cor = null; //vazio ou redefinir valor

(tipagem dinâmica) é quanto a criaçao de uma variavel (let) dando um outro valor a ela posteriormente

usar o comando typeof no console para saber o tipo da variável.

OBJETOS
rearranjo de variáveis dentro de uma unica variável ex: 
let pessoa{
    nome: "eu",
    idade: 54
};

ARRAYS
conjunto de dados em um índice (0,1,2,3)
ex: 
let familia = [mae, pai, filho]

FUNCTIONS
conjunto de instruçao que executa uma tarefa
ex:
let param = "qualquerCoisa"
function(a,b){
    param = "aaa" + " " + 24;
};

OPERADORES
aritiméticos
+, -, *, /, ** <- exponencial
++ e -- <- incremento em 1

de atribuiçao
= , += <- valor mais ele mesmo, mesmo conceito pra qualquer operador matemático

de comparaçao
=== <- igualdade restrita compara valores e tipos, retorna true ou false
== <- igualdade solta compara valores, nao tipos, tambem retorna true ou false, nao recomendado usar.
caso1 < caso2 ? "se sim um" : "se nao outro" <- auto explicativo

lógicos
tomada de decisões baseado em condiçoes multiplas
AND = && <- só é true se as 2 condições forem true
OR = || <- retorna true se uma das condições forem true
NOT = ! <- negaçao

FALSY <- qualquer valor undefined, null, 0, false, "", NaN <- not a number
TRUTHY
.--------------------------------------------------------------------------------------.

IF ELSE
if (condição){
    (código);
} else if(outra condição){
    (código);
} else {
    (código);
};

SWICH CASE
swich(variavel){
    case (condiçao):
    código;
    break;
    default: valor padrao;
}

LOOP
1 - for
2 - while
condiçao primeiro executa depois
3 - do...while
executa uma vez depois olha a condiçao
4 - for..in
melhor para objetos ou arrays
5 - for..of