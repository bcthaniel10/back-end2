//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    }; 
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0)
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMisssoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluída"; // === Igualdade ESTRITA
        return foiFinalizada;
    };0

    const apenasConcluidas = listaDeMisssoes.filter(verificarStatusDaMissao);
    return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoItem) {
    let novoInventario;

    if(acao === "pegar") {
        const inventarioComItenNovo = [inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItenNovo;
    } else if (acao === "descartar") {
        const inventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
    } else {
        novoInventarioAtual;
    }
    return novoInventario; //Retorna a mochila do jogador atualizada
}

const pontosDoJogador = [100, 50, 250, 10]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuação final; ", total);

const missoes = [
    {nome: "Salvar a aldeia", status: "concluida"},
    {nome: "encontrar o mapa", status: "em andamento"},
    {nome: "Derrota o chefão", status: "falhou"},
    {nome: "coleta recursos", status: "concluida"}
];


console.log(missoes);