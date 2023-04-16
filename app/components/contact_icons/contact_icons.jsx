import styles from './page.module.scss'
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function ContactIcons({ props }) {
    return (
        <ul className={`${props.nav ? styles.navContactIcons : styles.contactIcons} ${props?.toggled ? styles.contactMenuAppear : ''}`}>
            <li>
                <a href="https://github.com/kut-man" target="_blank">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/kutman-eshenkulov-186842233/" target="_blank">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="https://t.me/kut_man" target="_blank">
                    <FaTelegram />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/_.kutman/" target="_blank">
                    <FaInstagram />
                </a>
            </li>
            <li style={props.nav ? { display: 'none' } : {}}>
                <a href="mailto: kutman.stel@gmail.com" target="_blank">
                    <FaRegEnvelope />
                </a>
            </li>
        </ul>
    )
}
