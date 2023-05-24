"use client";

import styles from './page.module.scss'
import ContactIcons from '../../contactIcons/contactIcons';
import { useState } from 'react';
import Image from 'next/image';
import Contact from '../../contact/contact';

const Navbar = () => {

    const [toggled, setToggled] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    function appear() {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        setToggled(true);
    }

    function disappear() {
        document.body.style.overflow = null;
        setToggled(false);
    }

    function scrollTo(type) {
        if (type === "experiments") {
            setTimeout(() => window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' }), 600);
        }
        else if (type === "studies") {
            setTimeout(() => window.scroll({ top: window.innerHeight, behavior: 'smooth' }), 600);
        }
        else {
            setContactOpen(true);
        }
        disappear();
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

            <ul style={{ opacity: `${contactOpen ? "0" : "1"}` }}>
                <li onClick={() => window.scroll({ top: window.innerHeight, behavior: 'smooth' })} >Case Studies</li>
                <li onClick={() => window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' })} >Experiments</li>
                <li onClick={() => setContactOpen(true)} >Contanct</li>
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
                    <li onClick={disappear}>Home</li>
                    <li onClick={() => scrollTo("studies")}>Case Studies</li>
                    <li onClick={() => scrollTo("experiments")}>Experiments</li>
                    <li onClick={() => scrollTo("contact")}>Contact</li>
                </ul>

                <ContactIcons toggled={toggled} />

            </div>

            {contactOpen && <Contact setContactOpen={setContactOpen} />}

        </nav>
    )
}

export default Navbar;