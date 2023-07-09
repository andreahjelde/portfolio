import styles from '../styles/About.module.scss'
import img from '../Images/meg.jpeg'



const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Om meg</h1>
            <div className={styles.ContainerElements}>
                <img className={styles.imagePerson} src={img} alt={"person"}></img >
                <p className={styles.txtAbout}>Hei! Jeg heter Andrea Hjelde, og er en 26 år gammel kvinne.
                    For 2 år siden begynte jeg på OsloMet sitt bachelorporgram "Anvendt datateknologi". Under dette studiet har jeg utviklet en stor interesse for webutvikling, og noe jeg synes er veldig gøy å jobe med.
                    Det jeg liker mest er at man kan se resultater fra det man jobber med fra første øyeblikk. En berg og dalbane av frustrasjon og glede, hvor gleden alltid overvinner øyeblikkene med frustrasjon.
                    På bakrgunn av dette er front-end det jeg interesserer meg for, men Apputvikling er noe jeg også har et lite øye for.

                På fritiden min liker jeg å være sosial med venner, reise, utforske kreativiteten min med oljemaling (gjerne med litt inspirasjon fra Bob Ross) og veldig mye annet rart. </p>
            </div>
        </div>
       
    ) 
    
}

export default About;