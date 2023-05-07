"use client";

import styles from './page.module.scss'
import Image from 'next/image';


const Footer = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div>
                <Image
                    onClick={handleClick}
                    className={styles.logo}
                    src="https://user-images.githubusercontent.com/73386100/231491201-77f9d1d4-ead5-434f-9959-bb07b9bf0369.png"
                    alt="Logo"
                    width={80}
                    height={80}
                />
                <span>Top</span>
            </div>

            <ul>
                <li>
                    <a href="">LinkedIn</a>
                    <a href="">Telegram</a>
                </li>
                <li> 
                    <a href="">Github</a>
                    <a href="">Codepen</a>
                </li>
            </ul>
            <p>© 2023 Kutman Eshenkulov - All rights reserved -
                <a href = "mailto: kutman.stel@gmail.com"> Contact</a>
            </p>
        </footer>
    )
}

export default Footer;