import styles from './placar.module.css'

function Placar({placar}) {
    return(
        <>
            <div className={styles.placar}>
                <h1>PLACAR:</h1>
                <p>X: {placar.x}</p>
                <p>O: {placar.o}</p>
                <p>Velha: {placar.empates}</p>
            </div>
        </>
    )
}

export default Placar