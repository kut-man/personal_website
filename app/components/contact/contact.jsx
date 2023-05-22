"use client";

import styles from "./page.module.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../button/button/button";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { createPortal } from "react-dom";
import emailjs from '@emailjs/browser';

const Contact = ({ setContactOpen }) => {

    const [animationClass, setAnimationClass] = useState();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        text: "",
        disabled: true,
        animation: false
    });
    const form = useRef();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setAnimationClass([styles.anim1, styles.anim2, styles.anim3]);
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = null;
        }
    }, [])

    useEffect(() => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(formValues.email) && formValues.name !== "" && formValues.text !== "") {
            setFormValues((prev) => ({ ...prev, disabled: false }));
        }
    }, [formValues])

    function disappear() {
        setAnimationClass();
        setTimeout(() => {
            setContactOpen(false)
        }, 450);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        form.current.reset();
        setFormValues({
            name: "",
            email: "",
            text: "",
            disabled: false,
            animation: true
        });

        emailjs.sendForm('service_7zkzeii', 'template_41ht47e', form.current, 'user_gbguGQSWNN1nYTouV1Kx3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setTimeout(() => {
            setFormValues((prev) => ({ ...prev, animation: false }));
        }, 2500);
    };

    return createPortal(
        <div className={`${styles.contact} ${animationClass?.[2]}`}>
            <div>
                <form animation={`${formValues.animation}`} ref={form} onSubmit={sendEmail} className={animationClass?.[1]}>

                    <h1>Contact</h1>

                    <p className={styles.appreciationText}></p>
                    <div onClick={disappear} className={styles.xIcon}>
                        <span className={styles.stick1}></span>
                        <span className={styles.stick2}></span>
                    </div>
                    <h2>Let&apos;s talk.</h2>
                    <p>
                        New projects, freelance inquiry or even coffee.
                    </p>
                    <label>Name *</label>

                    <div className={styles.input}>
                        <input
                            required type="text" name="user_name" value={formValues.name}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, name: e.target.value }))}
                        />
                    </div>

                    <label>E-mail *</label>

                    <div className={styles.input}>
                        <input
                            type="email" id="email" required name="user_email" value={formValues.email}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>

                    <label>Message *</label>

                    <div className={styles.input}>
                        <textarea
                            required name="message" cols="30" rows="6" value={formValues.text}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, text: e.target.value }))}>
                        </textarea>
                    </div>

                    <Button disabled={formValues.disabled} type="submit" text={"Send Message"} />

                </form>
                <div className={animationClass?.[0]}>

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
                        I enjoy brainstorming ways to improve <strong>user interfaces</strong>
                        and other design problems, so developing <strong>web applications</strong>
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
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Contact;