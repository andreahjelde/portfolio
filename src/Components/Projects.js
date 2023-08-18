import styles from '../styles/Projects.module.scss'
import React from "react"
import project from '../Images/project.png'
import Box from '../Components/Box.js'
import Button from './Button'

const Projects = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className={styles.mainContainer}>
        <h1 className={styles.title1El}>Mine prosjekter</h1>

            <div>
                <Box>
                    <div className={styles.container1}>
                        <h2 className={styles.titleEl}>Prosject 1</h2>
                        <img className={styles.bildeProsject} src={project} alt={"project"}/>
                        <p className={styles.textEl}>Dette prosjektet er en nettside som skal vise mine kunnskaper knyttet til programering.
                                        Programmeringssspråk bruk her er Scss og react js.</p>
                        <section className={styles.btn}>
                            <Button className={styles.btnLive}>Live versjon</Button>
                            <Button  className={styles.btnGithub}>Github</Button>
                        </section>
                    </div>

                </Box>
                <Box>
                    <div className={styles.container2}>
                        <h2 className={styles.titleEl}>Prosject 2</h2>
                        <img className={styles.bildeProsject} src={project} alt={"project"}/>
                        <p className={styles.textEl}>Dette prosjektet er en nettside som skal vise mine kunnskaper knyttet til programering.
                            Programmeringssspråk bruk her er Scss og react js.</p>
                        <section className={styles.btn}>
                            <Button className={styles.btnLive}>Live versjon</Button>
                            <Button  className={styles.btnGithub}>Github</Button>
                        </section>
                    </div>

                </Box>

                <Box>
                    <div className={styles.container3}>
                        <h2 className={styles.titleEl}>Prosject 3</h2>
                        <img className={styles.bildeProsject} src={project} alt={"project"}/>
                        <p className={styles.textEl}>Dette prosjektet er en nettside som skal vise mine kunnskaper knyttet til programering.
                            Programmeringssspråk bruk her er Scss og react js.</p>
                        <section className={styles.btn}>  
                            <Button className={styles.btnLive}>Live versjon</Button>
                            <Button  className={styles.btnGithub}>Github</Button>
                        </section>
                    </div>

                </Box>
            </div>
            </div>

        )
})

export default Projects;