// main.js

const { solicitarValor } = require('./entrada');
const { calcularNotas } = require('./calculo');
const { exibirResultado } = require('./exibicao');

// Função principal que orquestra o fluxo
function executarCaixaEletronico() {
    solicitarValor((valor) => {
        const resultado = calcularNotas(valor);
        exibirResultado(resultado);
    });
}

executarCaixaEletronico();
