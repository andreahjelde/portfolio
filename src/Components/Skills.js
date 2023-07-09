import styles from '../styles/Skills.module.scss'
const Skills = () => {
    return (
        <div className={styles.container}>
            <h1>Mine ferdigheter</h1>
            <div className={styles.containerSkills}>
                <p>Html</p>
                <p>Css / Scss</p>
                <p>JavaScript</p>
                <p>Typewriter</p>
            </div>

        </div>
    )
}

export default Skills;