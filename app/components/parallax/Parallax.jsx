"use client";

import { HalfCircle, Triangle, TwoHalfCircles } from "@/app/src";
import styles from './page.module.scss'
import { useState } from "react";

const Parallax = () => {

    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    function ParallaxEffect(e) {
        let moveX = e.clientX / 10;
        let moveY = e.clientY / 10;
        setTimeout(() => setTranslate({ x: moveX, y: moveY }), 200);
    }

    return (

        <div onMouseMove={(e) => ParallaxEffect(e)} className={styles.div}>
            <div style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }} className={styles.leftDiv}>

                <Triangle />
                <TwoHalfCircles />
                <TwoHalfCircles />
                <div className={styles.stick1}></div>
                <div className={styles.stick2}></div>

            </div>

            <div style={{ transform: `translate(${-translate.x}px, ${-translate.y}px)` }} className={styles.rightDiv}>

                <HalfCircle />
                <Triangle />
                <HalfCircle />
                <Triangle />
                <HalfCircle />
                <div className={styles.stick}></div>

            </div>
        </div>

    )
}

export default Parallax;