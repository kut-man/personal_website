import styles from './page.module.scss'
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function ContactIcons({ toggled }) {

    return (
        <ul className={`${styles.contactIcons} ${toggled && styles.contactMenuAppear}`}>
            <li>
                <a href="https://github.com/kut-man" aria-label="GitHub" target="_blank">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/kutman-eshenkulov-186842233/" aria-label="LinkedIn" target="_blank">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="https://t.me/kut_man" aria-label="Telegram" target="_blank">
                    <FaTelegram />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/_.kutman/" aria-label="Instagram" target="_blank">
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="mailto: kutman.stel@gmail.com" aria-label="Email" target="_blank">
                    <FaRegEnvelope />
                </a>
            </li>
        </ul>
    )
}
