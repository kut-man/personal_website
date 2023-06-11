"use client";

import styles from "./page.module.scss";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Form from "./form/form";
import AboutMe from "./aboutMe/aboutMe";

const Contact = ({ setContactOpen }) => {
    const [animationClass, setAnimationClass] = useState();
    const [isClosed, setIsClosed] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.overflow = "hidden";
        setAnimationClass(styles.anim);

        return () => {
            document.body.style.overflow = null;
        }
    }, [])

    function disappear() {
        setAnimationClass();
        setIsClosed(true);
        setTimeout(() => {
            setContactOpen(false)
        }, 450);
    }

    return createPortal(
        <div className={`${styles.contact} ${animationClass}`}>
            <div>
                <Form onClose={disappear} />
                <AboutMe isClosed={isClosed} />
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Contact;