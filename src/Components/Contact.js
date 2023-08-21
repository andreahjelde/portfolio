import styles from '../styles/Contact.module.scss'
import React from "react"

//Legg til et input-felt slik at noen kan sende en melding til mai direkte fra siden
const Contact = React.forwardRef((props, ref) => {

    return(
        <div ref={ref} className={styles.container}>
            <h1>Kontakt meg</h1>
            <p className={styles.text}>Tlf: 415 47 827</p>
            <p className={styles.text}>E-post: andrea.hjelde@gmail.com</p>
        </div>
    )
})

export default Contact;