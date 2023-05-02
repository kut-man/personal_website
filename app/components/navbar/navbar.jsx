"use client";

import styles from './page.module.scss'
import ContactIcons from '../contact_icons/contact_icons';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../button/button';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';
import { Libre_Baskerville } from '@next/font/google';

const baskerville = Libre_Baskerville({
    weight: ["400"],
    subsets: ["latin"],
    variable: '--font-baskerville'
})

const Navbar = () => {

    const [toggled, setToggled] = useState(false);

    function appear() {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        setToggled(true)
    }

    function disappear() {
        document.body.style.overflow = null;
        setToggled(false)
    }

    return (
        <nav className={styles.nav}>

            <Image
                className={styles.logo}
                src="https://user-images.githubusercontent.com/73386100/231491201-77f9d1d4-ead5-434f-9959-bb07b9bf0369.png"
                alt="Logo"
                width={80}
                height={80}
            />

            <ul>
                <li>Case Studies</li>
                <li>Experiments</li>
                <li>Contanct</li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
                    </svg>
                </li>
            </ul>

            <span onClick={appear}>
                <div style={{ width: 45 }} />
                <div style={{ width: 35, transform: "translate(10px)" }} />
                <div style={{ width: 25, transform: "translate(20px)" }} />
            </span>

            <div className={`${styles.mainToggleContainer} ${toggled ? styles.toogleAnimation : ''}`}></div>
            <div className={`${styles.toggleContainer} ${toggled ? styles.toogleAnimation1 : ''}`}>

                <div onClick={disappear} className={`${styles.xIcon} ${toggled ? styles.xIconAppear : ''}`}></div>

                <ul className={`${styles.burgerNav} ${toggled ? styles.menuAppear : ''}`}>
                    <li>Home</li>
                    <li>Case Studies</li>
                    <li>Experiments</li>
                    <li>Contact</li>
                </ul>

                <ContactIcons props={{ nav: true, toggled: toggled }} />

            </div>

            <div className={styles.contact}>
                <h1></h1>
                <div>
                    <div>
                        <h2>About Me.</h2>
                        <p className={baskerville.className}>Interactive Front-end developer.</p>
                        <p className={baskerville.className}>
                            I'm Kutman Eshenkulov, a 20-year-old Kyrgyz Freelance Front-end developer. I'm a weird guy who likes making weird things with web technologies.
                            I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                            When not studing or futzing around with code, I love reading books with hot chocolate.
                        </p>

                        <div className={styles.icons}>
                            <span className={styles.reactIcon}>
                                <FaReact />
                            </span>
                            <span className={styles.jsIcon}>
                                <SiJavascript />
                            </span>
                            <span className={styles.cssIcon}>
                                <FaCss3Alt />
                            </span>
                            <span className={styles.nextjsIcon}>
                                <SiNextdotjs />
                            </span>
                        </div>

                    </div>
                    <form>
                        <div className={styles.xIcon}></div>
                        <h1>Let's talk.</h1>
                        <p className={baskerville.className}>New projects, freelance inquiry or even coffee.</p>
                        <label htmlFor="">Name *</label>
                        <div>
                            <input type="text" />
                        </div>
                        <label htmlFor="">E-mail *</label>
                        <div>
                            <input type="text" />
                        </div>
                        <label htmlFor="">Message *</label>
                        <div>
                            <textarea name="" id="" cols="30" rows="6"></textarea>
                        </div>
                        <Button text={"Send Message"} />
                    </form>
                </div>
                <h1></h1>
            </div>

        </nav>
    )
}

export default Navbar;