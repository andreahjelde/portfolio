import styles from '../styles/Skills.module.scss'
import React from "react"
import {AiFillHtml5} from "@react-icons/all-files/ai/AiFillHtml5";
import {SiCss3} from "@react-icons/all-files/si/SiCss3";
import {SiSass} from "@react-icons/all-files/si/SiSass"
import {DiJavascript} from "@react-icons/all-files/di/DiJavascript";
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript";
import {SiReact} from "@react-icons/all-files/si/SiReact";



const Skills = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={styles.container}>
            <h1>Mine ferdigheter</h1>
            <section className={styles.containerSkills}>
                <div className={styles.row}>
                    <div className={styles.skillsEl_html}>
                        <AiFillHtml5 size={55} />
                        <p>Html</p>
                    </div>

                    <div className={styles.skillsEl_css}>
                        <SiCss3 size={55} />
                        <p>Css</p>
                    </div>


                </div>

                <div className={styles.row}>
                    <div className={styles.skillsEl_scss}>
                        <SiSass size={55}/>
                        <p>Scss</p>
                        </div>
                    <div className={styles.skillsEl_javascript}>
                        <DiJavascript size={55} />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.skillsEl_next}><p>Next.js</p></div>

                </div>

                <div className={styles.row}>
                    <div className={styles.skillsEl_typescript}>
                        <SiTypescript size={55}/>
                        <p>TypeScript</p>
                    </div>

                    <div className={styles.skillsEl_react}>
                        <SiReact size={55}/>
                        <p>React</p>
                    </div>


                </div>




            </section>

        </div>
        )
})

export default Skills;