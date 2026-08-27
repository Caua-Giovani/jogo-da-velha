import styles from './game.module.css'
import Board from '../Board/Board'
import { useState } from 'react'

function Game() {
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [jogadaAtual, setJogadaAtual] = useState(0);
    const xProximo = jogadaAtual % 2 === 0;
    const tabAtual = historico[jogadaAtual]

    function handlePlay(proxQuadrado){
        const proxHistorico = [...historico.slice(0,jogadaAtual + 1),proxQuadrado];
        setHistorico(proxHistorico);
        setJogadaAtual(proxHistorico.length - 1);
        }

        function irPara(proxJogada){
            setJogadaAtual(proxJogada);
        }

        const movimentos = historico.map((quadrados ,movimento) =>{
            let descricao;
            if (movimento > 0){
                descricao = 'Ir para movimento ' + movimento + 'º';
            } else {
                descricao = 'Ir para o começo.';
            }
            return (
                <li key={movimento}>
                    <button onClick={() => irPara(movimento)}>{descricao}</button>
                </li>
            );
        });
    
    return(
        <>
            <div className={styles.game}>
                <div className={styles.gameBoard}>
                    <Board xProximo={xProximo} quadrados={tabAtual} naJogada={handlePlay}/>
                </div>
                <div className={styles.gameInfo}>
                    <ol>{movimentos}</ol>
                </div>
            </div>
        </>
    )
}

export default Game