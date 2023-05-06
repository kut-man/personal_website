"use client";

import styles from './page.module.scss'
import ContactIcons from '../contact_icons/contact_icons';
import { useState } from 'react';
import Image from 'next/image';
import Contact from '../contact/contact';

const Navbar = () => {

    const [toggled, setToggled] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    function appear() {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        setToggled(true)
    }

    function disappear(xIcon) {
        document.body.style.overflow = null;
        setToggled(false)
        xIcon ? null : setContactOpen(true);
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
                <li onClick={() => setContactOpen(true)} >Contanct</li>
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

                <div onClick={() => disappear(true)} className={`${styles.xIcon} ${toggled ? styles.xIconAppear : ''}`}></div>

                <ul className={`${styles.burgerNav} ${toggled ? styles.menuAppear : ''}`}>
                    <li onClick={disappear}>Home</li>
                    <li onClick={disappear}>Case Studies</li>
                    <li onClick={disappear}>Experiments</li>
                    <li onClick={disappear}>Contact</li>
                </ul>

                <ContactIcons props={{ nav: true, toggled: toggled }} />

            </div>

            {contactOpen && <Contact setContactOpen={setContactOpen} />}

        </nav>
    )
}

export default Navbar;