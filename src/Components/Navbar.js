import styles from '../styles/Navbar.module.scss'

const Navbar = ( {children}) => {
    return(
        <div className={styles.container}> {children}</div>
    )
}

export default Navbar