import styles from '../styles/Burger.module.scss'

const Burger = () => {
    
    return (
        <div className={styles.hamburger}>
           <div className={styles.burger}></div>
           <div className={styles.burger}></div>
           <div className={styles.burger}></div>
        </div>
    )
}

export default Burger;