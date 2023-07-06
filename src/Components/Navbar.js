import styles from '../styles/Navbar.module.scss'
const Navbar= () => {
    return (
        <div className={styles.container}>
            <button>Om meg</button>
            <button>Ferdigheter</button>
            <button>Prosjekter</button>
            <button>Kontakt</button>
        </div>
    )
}

export default Navbar;