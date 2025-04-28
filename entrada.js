// entrada.js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para solicitar um valor positivo
function solicitarValor(callback) {
    rl.question("Digite o valor para saque: R$ ", (valor) => {
        const valorNumerico = parseInt(valor, 10);
        // Validação do valor
        if (isNaN(valorNumerico) || valorNumerico <= 0) {
            console.log("Valor inválido. Por favor, digite um valor positivo.");
            return solicitarValor(callback);
        }
        callback(valorNumerico); // Passa o valor para a função de cálculo
    });
}

module.exports = {
    solicitarValor
};
