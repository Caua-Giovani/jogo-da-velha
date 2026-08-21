import styles from './board.module.css'
import Square from '../Square/Square'

function Board({xProximo, quadrados, naJogada}) {
    function clickSquare(i){
        if (calcularVencedor(quadrados) || quadrados[i]){
            return;
        }

        const proxQuadrado = quadrados.slice()
        // O slice cria um copia do array sem altera-lo
        if (xProximo){
            proxQuadrado[i] = 'X';
        } else {
            proxQuadrado[i] = 'O';
        }
        naJogada(proxQuadrado);
    }

    function calcularVencedor(quadrados){
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
        for (let i = 0; i>linhas.length; i++){
            const [col1, col2 ,col3] = linhas[i];
            if(quadrados[col1] && quadrados[col1] === quadrados[col2] && quadrados[col1] === quadrados[col3]){
                return quadrados[col1]
            }
            // verifica se há algum vencedor, de acordo com as linhas que foram fornecidas pela variavel "linhas", caso houver ele retorna o vencedor que no caso é o jogador que esta no quadrado A (o I é apenas o index para percorrer a lista)
        }
        return null;
    }

    const vencedor = calcularVencedor(quadrados)
    let status;
    if (vencedor) {
        status = 'Vencedor: ' + vencedor;
    } else {
        status = 'Proximo jogador: ' + (xProximo ? 'X' : 'O');
    }

    return(
        <>
            <h1 className={styles.status}>{status}</h1>
            <div className={styles.tabuleiro}>
                <div className="linhaTabuleiro">
                    <Square valor={quadrados[0]} funcaoQuadrado={clickSquare(0)}/>
                    <Square valor={quadrados[1]} funcaoQuadrado={clickSquare(1)}/>
                    <Square valor={quadrados[2]} funcaoQuadrado={clickSquare(2)}/>
                </div>
                <div className="linhaTabuleiro">
                    <Square valor={quadrados[3]} funcaoQuadrado={clickSquare(3)}/>
                    <Square valor={quadrados[4]} funcaoQuadrado={clickSquare(4)}/>
                    <Square valor={quadrados[5]} funcaoQuadrado={clickSquare(5)}/>
                </div>
                <div className="linhaTabuleiro">
                    <Square valor={quadrados[6]} funcaoQuadrado={clickSquare(6)}/>
                    <Square valor={quadrados[7]} funcaoQuadrado={clickSquare(7)}/>
                    <Square valor={quadrados[8]} funcaoQuadrado={clickSquare(8)}/>
                </div>
            </div>
        </>
    )
}

export default Board