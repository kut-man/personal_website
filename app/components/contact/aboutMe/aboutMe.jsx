"use client";

import styles from "./page.module.scss";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { useState, useEffect } from "react";

const AboutMe = ({isClosed}) => {
    const [animationClass, setAnimationClass] = useState();

    useEffect(() => {
        isClosed ? setAnimationClass() : setAnimationClass(styles.anim1);
    }, [isClosed])

    return (
        <div className={`${animationClass} ${styles.aboutMe}`}>

            <h1>About</h1>

            <h2>About Me.</h2>
            <p>
                Interactive Front-end developer.
            </p>

            <p>
                My name is <strong>Kutman Eshenkulov</strong> and I&apos;m a
                <strong> student</strong> studying software engineering at a university.
                I have gained experience in <strong>front-end development</strong> through
                actively learning and practicing computer programming.
                <br />
                I enjoy brainstorming ways to improve <strong>user interfaces </strong>
                and other design problems, so developing <strong>web applications </strong>
                is a great way to unleash my <strong>creativity</strong>.
                And speaking of creative outlets, you&apos;ll often find me
                reading a good book or watching a movie with a bowl of
                popcorn in hand!
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
    )
};

export default AboutMe;