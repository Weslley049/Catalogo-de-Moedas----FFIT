import styles from './styles.module.scss'

export default function Header(){
    return(
        <header className={styles.headerContainer}>
            <h2>
                CriptoInvesting
            </h2>

            <p>
                Saiba tudo sobre as principais criptomoedas
            </p>
        </header>
    );
}