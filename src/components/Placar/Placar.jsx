import styles from './placar.module.css'

function Placar({placar}) {
    return(
        <>
            <div className={styles.placar}>
                <h1>PLACAR:</h1>
                <p>Jogador X: {placar.x}</p>
                <p>Jogador O: {placar.o}</p>
                <p>Velha: {placar.empates}</p>
            </div>
        </>
    )
}

export default Placar