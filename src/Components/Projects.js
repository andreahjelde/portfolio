import styles from '../styles/Projects.module.scss'
import React from "react"
import project from '../Images/project.png'
import Box from '../Components/Box.js'

const Projects = React.forwardRef((props, ref) => {

    return (
        /*<h1 className={styles.title1El}>Mine prosjekter</h1>*/

            <div className={styles.mainContainer}>
                <Box>
                    <div ref={ref} className={styles.container1}>
                        <h2 className={styles.titleEl}>Prosject 1</h2>
                        <img className={styles.bildeProsject} src={project} alt={"project"}/>
                        <p className={styles.textEl}>Dette prosjektet er en nettside som skal vise mine kunnskaper knyttet til programering.
                                        Programmeringssspråk bruk her er Scss og react js.</p>
                        <button className={styles.btnLive}>Live versjon</button>
                        <button  className={styles.btnGithub}>Github</button>
                    </div>

                </Box>
                <Box>
                    <div ref={ref} className={styles.container2}>
                        <h2 className={styles.titleEl}>Prosject 2</h2>
                        <img className={styles.bildeProsject} src={project} alt={"project"}/>
                        <p className={styles.textEl}>Dette prosjektet er en nettside som skal vise mine kunnskaper knyttet til programering.
                            Programmeringssspråk bruk her er Scss og react js.</p>
                        <button className={styles.btnLive}>Live versjon</button>
                        <button  className={styles.btnGithub}>Github</button>
                    </div>

                </Box>

                <Box>
                    <div ref={ref} className={styles.container3}>
                        <h2 className={styles.titleEl}>Prosject 3</h2>
                        <img className={styles.bildeProsject} src={project} alt={"project"}/>
                        <p className={styles.textEl}>Dette prosjektet er en nettside som skal vise mine kunnskaper knyttet til programering.
                            Programmeringssspråk bruk her er Scss og react js.</p>
                        <button className={styles.btnLive}>Live versjon</button>
                        <button  className={styles.btnGithub}>Github</button>
                    </div>

                </Box>
            </div>


        )
})

export default Projects;