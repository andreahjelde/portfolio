import styles from '../../styles/sections/About.module.scss'
import img from '../../Images/meg.jpeg'
import React from "react"



const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Om meg</h1>
            <div className={styles.containerElements}>
                <img className={styles.imagePerson} src={img} alt={"person"}></img >
                <p className={styles.txtAbout}>Hei! Jeg heter Andrea Hjelde, og er en 26 år gammel kvinne.
                    For 2 år siden begynte jeg på OsloMet sitt bachelorporgram "Anvendt datateknologi". Under dette studiet har jeg utviklet en stor interesse for webutvikling, og noe jeg synes er veldig gøy å jobe med.
                    Det jeg liker mest er at man kan se resultater fra det man jobber med fra første øyeblikk. En berg og dalbane av frustrasjon og glede, hvor gleden alltid overvinner øyeblikkene med frustrasjon.
                    På bakrgunn av dette er front-end det jeg interesserer meg for.

                    På fritiden min liker jeg blant annet å være sosial med venner, reise, utforske kreativiteten min med av f.eks oljemaling
                    (gjerne med litt veiledning fra Bob Ross) og veldig mye annet rart.</p>
            </div>
        </div>

        )

}

export default About;