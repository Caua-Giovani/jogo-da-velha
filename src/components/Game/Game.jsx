import styles from './game.module.css'
import Board from '../Board/Board'
import { useState, useEffect } from 'react'
import { calcularVencedor } from '../../utils/logicaJogo';
import Placar from '../Placar/Placar';
import { exibirAlertaReinicio } from '../../utils/alertas';
import { exibirAlertaFimDePartida } from '../../utils/alertas';

function Game() {
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [jogadaAtual, setJogadaAtual] = useState(0);
    const xProximo = jogadaAtual % 2 === 0;
    const tabAtual = historico[jogadaAtual]
    const [placar, setPlacar] = useState({ x: 0, o: 0, empates: 0 });
    const [tema, setTema] = useState("dark");

    const alternarTema = () => {
        if (tema==="dark") {
        document.body.classList.add('tema-claro');
        setTema('light')
        } else {
        document.body.classList.remove('tema-claro');
        setTema('dark')
        }
    };

    function reiniciarRodada(){
        setHistorico([Array(9).fill(null)])
        setJogadaAtual(0)
    }

    function reiniciarPartida(){
        setHistorico([Array(9).fill(null)])
        setJogadaAtual(0)
        setPlacar({ x: 0, o: 0, empates: 0 })
    }
    
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
        
    }
    useEffect(() =>{
        if (placar.x === 3){
            exibirAlertaFimDePartida("Parabens X!","O jogador X venceu a partida!!",reiniciarPartida())
        } else if (placar.o === 3){
            exibirAlertaFimDePartida("Parabens O!","O jogador O venceu a partida!!",reiniciarPartida())
        } else {
            return
        }
    }, [placar])
    

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

        function reiniciar(){
            exibirAlertaReinicio(reiniciarPartida)
        }
        
    
    return(
        <>
            <div className={styles.game}>
                <div className={styles.gameBoard}>
                    <Board xProximo={xProximo} quadrados={tabAtual} naJogada={handlePlay} funcJogNov={reiniciarRodada   }/>
                    <button onClick={reiniciar} className={styles.btnReini}>Reiniciar Partida</button>
                </div>
                <div className={styles.gameInfo}>
                    <Placar placar={placar}/>
                    <h1>HISTÓRICO</h1>
                    <ul className={styles.lista}>{movimentos}</ul>
                </div>
                
            </div>
            <button className={styles.btnThemeToggle} onClick={alternarTema}>{tema==='dark' ? '☀️ Tema Claro' : '🌙 Tema Escuro'}</button>
        </>
    )
}

export default Game