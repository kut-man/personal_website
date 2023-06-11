"use client";

import styles from "./page.module.scss";
import Button from "../../button/button";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = ({onClose}) => {
    const [formValues, setFormValues] = useState({name: "", email: "", text: ""});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [isClosed, setIsClosed] = useState(false)
    const [animationClass, setAnimationClass] = useState();

    const form = useRef();

    useEffect(() => {
        setAnimationClass(styles.anim);
    }, [])

    useEffect(() => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(formValues.email) && formValues.name !== "" && formValues.text !== "") {
            setIsButtonDisabled(false)
        }
    }, [formValues])

    const sendEmail = (e) => {
        e.preventDefault();
        
        form.current.reset();

        setFormValues({name: "", email: "", text: ""});
        setIsButtonDisabled(true);
        setIsClosed(true);

        emailjs.sendForm('service_7zkzeii', 'template_41ht47e', form.current, 'user_gbguGQSWNN1nYTouV1Kx3')

        setTimeout(() => {
            setIsClosed(false);
        }, 2500);
    };

    function disappear() {
        setAnimationClass();
        onClose();
    }

    return (
        <form className={`${animationClass} ${styles.form}`} ref={form} animation={`${isClosed}`} onSubmit={sendEmail}>

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

            <Button disabled={isButtonDisabled} type="submit" text={"Send Message"} />

        </form>
    )
};

export default Form;