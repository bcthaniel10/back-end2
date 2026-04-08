//declaração da função com parâmetro
function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
};

saudacao("alerandro");

//função que recebe um valor, soma  1 número e retorna
function subirDeNivel(nivelAtual) {
    return nivelAtual + "!";
}

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("seu nivel é: " + nivelAtualizado);

//função que soma dois números
function soma(numero1, numero2) {
    return numero1 + numero2
};

console.log(soma(5,3));

function verificarPar(numero) {
    if (numero % 2 === 0) {
        return "o número é par"
    } else {
        return "o número é impar"
    }
};

console.log(verificarPar(2));