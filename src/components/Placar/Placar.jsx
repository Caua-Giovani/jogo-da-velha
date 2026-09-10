import styles from './placar.module.css'

function Placar({placar}) {
    return(
        <>
            <div className={styles.placar}>
                <p className={styles.desc}>O jogo acaba quando um jogador chegar a 3 pontos</p>
                <h1>PLACAR:</h1>
                <p className={styles.pontos}>Jogador X: {placar.x}</p>
                <p className={styles.pontos}>Jogador O: {placar.o}</p>
                <p className={styles.pontos}>Velha: {placar.empates}</p>
                
            </div>
        </>
    )
}

export default Placar