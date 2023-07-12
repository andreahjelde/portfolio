import styles from '../styles/Box.module.scss'
import React from "react"

const Box = ({children}) => {
    
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Box;