"use client";

import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import Button from "../button/button";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { Libre_Baskerville } from "@next/font/google";
import { createPortal } from "react-dom";

const baskerville = Libre_Baskerville({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-baskerville",
});

const Contact = ({ setContactOpen }) => {

    const [first, setfirst] = useState([{}, {}, {}]);

    useEffect(() => {
        setfirst([styles.anim1, styles.anim2, styles.anim3]);
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = null;
          }
    }, [])
    

    function disappear() {
        setfirst([{}, {}]);
        setTimeout(() => {
            setContactOpen(false)
        }, 450);
    }

    return createPortal (
        <div className={`${styles.contact} ${first[2]}`}>
            <h1></h1>
            <div>
                <div className={first[0]}>
                    <h2>About Me.</h2>
                    <p className={baskerville.className}>
                        Interactive Front-end developer.
                    </p>

                    <p className={baskerville.className}>
                        I&apos;m Kutman Eshenkulov, a 20-year-old Kyrgyz
                        <strong>Freelance Front-end developer</strong>.
                        I&apos;m a weird guy who likes making weird things with web technologies.
                        <br />I like to<strong>resolve</strong> design problems,
                        <strong>create</strong> smart user interface and
                        <strong>imagine</strong> useful interaction, developing rich web experiences
                        &amp; <strong>web applications</strong>.
                        <br />When not studying or futzing around with code, I love reading books with hot chocolate.
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
                <form className={first[1]}>
                    <div onClick={disappear} className={styles.xIcon}>
                        <span className={styles.stick1}></span>
                        <span className={styles.stick2}></span>
                    </div>
                    <h1>Let&apos;s talk.</h1>
                    <p className={baskerville.className}>
                        New projects, freelance inquiry or even coffee.
                    </p>
                    <label htmlFor="">Name *</label>
                    <div className={styles.input}>
                        <input type="text" />
                    </div>
                    <label htmlFor="">E-mail *</label>
                    <div className={styles.input}>
                        <input type="text" />
                    </div>
                    <label htmlFor="">Message *</label>
                    <div className={styles.input}>
                        <textarea name="" id="" cols="30" rows="6"></textarea>
                    </div>
                    <Button disabled text={"Send Message"} />
                </form>
            </div>
            <h1></h1>
        </div>,
        document.getElementById('portal')
    );
};

export default Contact;
