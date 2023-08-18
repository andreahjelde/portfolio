
import styles from '../styles/Button.module.scss'

const Button = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Button;