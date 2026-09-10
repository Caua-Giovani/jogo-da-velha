import styles from './board.module.css'
import Square from '../Square/Square'
import { calcularVencedor } from '../../utils/logicaJogo'
import { exibirAlertaResultado, exibirAlertaVelha } from '../../utils/alertas'
import { useState, useEffect } from 'react'

function Board({xProximo, quadrados, naJogada, funcJogNov}) {
    
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

    const vencedor = calcularVencedor(quadrados)
    let status;
    useEffect(() =>{
        if (vencedor === 'X' || vencedor ==='O') {
            status = 'Vencedor: ' + vencedor;
            exibirAlertaResultado("Parabéns!",`O jogador ${vencedor} venceu a rodada!!`,funcJogNov)
        } else if(vencedor === 'Empate'){
            status = 'Empate!'
            exibirAlertaVelha(funcJogNov)
        } else {
            status = 'Vez do jogador: ' + (xProximo ? 'X' : 'O');
        }
    }, [vencedor])

    return(
        <>
            <h1 className={styles.titulo}>Jogo da Velha</h1>
            <h2 className={styles.status}>{status}</h2>
            <div className={styles.tabuleiro}>
                    <Square valor={quadrados[0]} funcaoQuadrado={() => clickSquare(0)}/>
                    <Square valor={quadrados[1]} funcaoQuadrado={() => clickSquare(1)}/>
                    <Square valor={quadrados[2]} funcaoQuadrado={() => clickSquare(2)}/>
                    <Square valor={quadrados[3]} funcaoQuadrado={() => clickSquare(3)}/>
                    <Square valor={quadrados[4]} funcaoQuadrado={() => clickSquare(4)}/>
                    <Square valor={quadrados[5]} funcaoQuadrado={() => clickSquare(5)}/>
                    <Square valor={quadrados[6]} funcaoQuadrado={() => clickSquare(6)}/>
                    <Square valor={quadrados[7]} funcaoQuadrado={() => clickSquare(7)}/>
                    <Square valor={quadrados[8]} funcaoQuadrado={() => clickSquare(8)}/>
            </div>
        </>
    )
}

export default Board