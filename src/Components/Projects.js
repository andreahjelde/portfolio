import styles from '../styles/Projects.module.scss'
const Projects = () => {

    return (
        <div className={styles.container}>
            <h1>Mine prosjekter</h1>
            <section className={styles.container_box}>
                <div className={styles.containerEl}>
                    <p>Prosject 1</p>
                    <p>Bilde av prosjektet</p>
                </div>
                <div className={styles.containerEl}>
                    <p>Prosject 2</p>
                    <p>Bilde av prosjektet</p>

                </div>
                <div className={styles.containerEl}>
                    <p>Prosject 3</p>
                    <p>Bilde av prosjektet</p>
                </div>
            </section>
        </div>
    )

}

export default Projects;