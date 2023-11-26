"use client";

import styles from './page.module.scss'
import Image from 'next/image';


const Footer = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div onClick={handleClick}>
                <Image
                    className={styles.logo}
                    src="/myLogo.png"
                    alt="Logo"
                    width={80}
                    height={80}
                />
                <span>Top</span>
            </div>

            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/kutman-eshenkulov-186842233/" target="_blank">LinkedIn</a>
                    <a href="https://t.me/kut_man" target="_blank">Telegram</a>
                </li>
                <li> 
                    <a href="https://github.com/kut-man" target="_blank">Github</a>
                    <a href="https://codepen.io/Kutman-Eshenkulov" target="_blank">Codepen</a>
                </li>
            </ul>
            <p>© 2023 Kutman Eshenkulov - All rights reserved -
                <a href = "mailto: kutman.stel@gmail.com"> Contact</a>
            </p>
        </footer>
    )
}

export default Footer;