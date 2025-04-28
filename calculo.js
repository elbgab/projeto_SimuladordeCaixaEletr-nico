// calculo.js

// Array com os valores das cédulas disponíveis
const cedulas = [100, 50, 20, 10, 5, 2, 1];

// Função para calcular a quantidade de cada cédula
function calcularNotas(valor) {
    let resultado = {}; // Objeto que armazenará a quantidade de cédulas
    
    cedulas.forEach(cédula => {
        let quantidade = Math.floor(valor / cédula);
        if (quantidade > 0) {
            resultado[cédula] = quantidade;
            valor -= quantidade * cédula;
        }
    });

    return resultado; // Retorna o resultado com a distribuição das cédulas
}

module.exports = {
    calcularNotas
};
 