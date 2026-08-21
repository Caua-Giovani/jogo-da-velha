import styles from './square.module.css'

function Square({valor, funcaoQuadrado}) {
    return(
        <>
            <button className={styles.square} onClick={funcaoQuadrado}>
                {valor}
            </button>
        </>
    )
}

export default Square