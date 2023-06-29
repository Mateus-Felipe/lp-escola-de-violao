import styles from './styles.module.scss'

export default function Button({ width }: any = '80%'){
    return(
        <button style={{ width: width }} className={styles.button}>Quero começar agora</button>
    )
}