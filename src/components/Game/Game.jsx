import styles from './game.module.css'
import Board from '../Board/Board'
import { useState } from 'react'
import { calcularVencedor } from '../../utils/logicaJogo';
import Placar from '../Placar/Placar';

function Game() {
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [jogadaAtual, setJogadaAtual] = useState(0);
    const xProximo = jogadaAtual % 2 === 0;
    const tabAtual = historico[jogadaAtual]
    const [placar, setPlacar] = useState({ x: 0, o: 0, empates: 0 });
    
    function atualizarPlacar(resultado) {
        const novoPlacar = {...placar}
        if (resultado === 'X') {
            novoPlacar.x = novoPlacar.x + 1;
        } else if (resultado === 'O') {
            novoPlacar.o = novoPlacar.o + 1;
        } else if (resultado === 'Empate') {
            novoPlacar.empates = novoPlacar.empates + 1;
        }
        setPlacar(novoPlacar)
        console.log(novoPlacar)
    }

    

    function handlePlay(proxQuadrado){
        const proxHistorico = [...historico.slice(0,jogadaAtual + 1),proxQuadrado];
        setHistorico(proxHistorico);
        setJogadaAtual(proxHistorico.length - 1);

            const resultado = calcularVencedor(proxQuadrado);

            if (resultado) {
                atualizarPlacar(resultado);
            }
        }

        function irPara(proxJogada){
            setJogadaAtual(proxJogada);
        }

        const movimentos = historico.map((quadrados ,movimento) =>{
            let descricao;
            if (movimento > 0){
                descricao = 'Movimento #' + movimento ;
            } else {
                descricao = 'Inicio do Jogo';
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
                    <Placar placar={placar}/>
                    <h1>HISTÓRICO</h1>
                    <ol className={styles.lista}>{movimentos}</ol>
                </div>
                
            </div>
        </>
    )
}

export default Game