// exibicao.js

// Função para exibir o resultado das cédulas
function exibirResultado(resultado) {
    console.log("\nNotas entregues:");
    for (let cédula in resultado) {
        console.log(`${resultado[cédula]} nota(s) de R$ ${cédula}`);
    }
}

module.exports = {
    exibirResultado
};
