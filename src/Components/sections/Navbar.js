import { useState } from 'react'
import styles from '../../styles/sections/Navbar.module.scss'
import Burger from '../Burger'

const Navbar = ( ) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div className={styles.navigation}>
            <ul className={styles.ul}>
                <li className={styles.li}>Om meg</li>
                <li className={styles.li}>Ferdigheter</li>
                <li className={styles.li}>Prosjekter</li>
                <li className={styles.li}>Kontakt</li>
            </ul>    

            <div className={styles.hamburger} onClick={toggleHamburger}>
                <Burger />
            </div>
        </div>

        
    )
}

export default Navbar