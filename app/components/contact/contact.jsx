"use client";

import styles from "./page.module.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../button/button";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { Libre_Baskerville } from "@next/font/google";
import { createPortal } from "react-dom";
import emailjs from '@emailjs/browser';

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        form.current.reset();
        setEmail({
            name: "",
            email: "",
            text: "",
            disabled: false
        });

        emailjs.sendForm('service_7zkzeii', 'template_41ht47e', form.current, 'user_gbguGQSWNN1nYTouV1Kx3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const [email, setEmail] = useState({
        name: "",
        email: "",
        text: "",
        disabled: true
    });



    useEffect(() => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(email.email) && email.name != "" && email.text != "") {
            setEmail((prev) => ({ ...prev, disabled: false }));
        }
    }, [email])

    return createPortal(
        <div className={`${styles.contact} ${first[2]}`}>
            <h1></h1>
            <div>
                <form  ref={form} onSubmit={sendEmail} className={first[1]}>
                    <div onClick={disappear} className={styles.xIcon}>
                        <span className={styles.stick1}></span>
                        <span className={styles.stick2}></span>
                    </div>
                    <h2>Let&apos;s talk.</h2>
                    <p className={baskerville.className}>
                        New projects, freelance inquiry or even coffee.
                    </p>
                    <label>Name *</label>

                    <div className={styles.input}>
                        <input
                            required type="text" name="user_name" value={email.name}
                            onChange={(e) => setEmail((prev) => ({ ...prev, name: e.target.value }))}
                        />
                    </div>

                    <label>E-mail *</label>

                    <div className={styles.input}>
                        <input
                            type="email" id="email" required name="user_email" value={email.email}
                            onChange={(e) => setEmail((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>

                    <label>Message *</label>

                    <div className={styles.input}>
                        <textarea
                            required name="message" cols="30" rows="6" value={email.text}
                            onChange={(e) => setEmail((prev) => ({ ...prev, text: e.target.value }))}>
                        </textarea>
                    </div>

                    <Button disabled={email.disabled} type="submit" text={"Send Message"} />

                </form>
                <div className={first[0]}>
                    <h2>About Me.</h2>
                    <p className={baskerville.className}>
                        Interactive Front-end developer.
                    </p>

                    <p className={baskerville.className}>
                        I&apos;m Kutman Eshenkulov, a 20-year-old Kyrgyz
                        <strong> Freelance Front-end developer</strong>.
                        I&apos;m a weird guy who likes making weird things with web technologies.
                        <br />I like to<strong> resolve</strong> design problems,
                        <strong> create</strong> smart user interface and
                        <strong> imagine</strong> useful interaction, developing rich web experiences
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
            </div>
            <h1></h1>
        </div>,
        document.getElementById('portal')
    );
};

export default Contact;


function EmailForm() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    function handleEmailChange(event) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        const isValidEmail = emailRegex.test(event.target.value);
        setEmail(event.target.value);
        if (!isValidEmail) {
            setEmailError("Please enter a valid email");
        } else {
            setEmailError("");
        }
    }

    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
            />
            <span>{emailError}</span>
            <button type="submit" disabled={!email}>
                Submit
            </button>
        </form>
    );
}
