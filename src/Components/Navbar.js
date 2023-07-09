import styles from '../styles/Navbar.module.scss'
const Navbar= () => {
    return (
        <div className={styles.container}>
            <button className={styles.navbarBtn}>Om meg</button>
            <button className={styles.navbarBtn}>Ferdigheter</button>
            <button className={styles.navbarBtn}>Prosjekter</button>
            <button className={styles.navbarBtn}>Kontakt</button>
        </div>
    )
}

export default Navbar;