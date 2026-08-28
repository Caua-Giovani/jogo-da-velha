export function calcularVencedor(quadrados){
        const linhas = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < linhas.length; i++){
            const [col1, col2 ,col3] = linhas[i];
            if(quadrados[col1] && quadrados[col1] === quadrados[col2] && quadrados[col1] === quadrados[col3]){
                return quadrados[col1]
            }
            // verifica se há algum vencedor, de acordo com as linhas que foram fornecidas pela variavel "linhas", caso houver ele retorna o vencedor que no caso é o jogador que esta no quadrado A (o I é apenas o index para percorrer a lista)
        }
        const estaTudoPreenchido = quadrados.every((quadrado) => quadrado !== null);

        if (estaTudoPreenchido) {
            return 'Empate';
        }
        return false;
    }