import styles from '../styles/Footer.module.scss'
import React from "react"
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";

const Footer = () => {
    
    return (
        <footer className={styles.container}>

            <a className={styles.githubBtn} href={"https://github.com/andreahjelde"}>
                <div className={styles.githubBtn_el}>
                    <GoMarkGithub size={30} />
                    <p>Github</p>
                </div>
            </a>

            <a className={styles.linkedinBtn} href={"https://www.linkedin.com/in/andrea-hjelde"}>
                <div className={styles.linkedinBtn_el}>
                    <AiFillLinkedin size={30} />
                    <p>LinkedIn</p>
                </div>
            </a>
        </footer>
    )
}

export default Footer;