"use client";

import { HalfCircle, Triangle, TwoHalfCircles } from "@/app/src";
import styles from './page.module.scss'
import { useState, useEffect } from "react";

const Parallax = () => {
    console.log("Rerender")

    const [translate, setTranslate] = useState({ x: 0, y: 0, duration: 0 });

    function ParallaxEffect(e) {
        let moveX = e.clientX / 13;
        let moveY = e.clientY / 15;
        if (moveX - e.clientX > 10){
           
            
            
        }
        setTranslate({ x: moveX, y: moveY });
        console.log(e.clientX, e.clientX)
        // console.log(e.clientX, e.clientX)
    }

    useEffect(() => {
        document.querySelector("main").addEventListener("mousemove", ParallaxEffect)
    }, [])


    return (

        <div className={styles.div}>
            <div style={{ transform: `translate(${-translate.x}px, ${-translate.y}px)`, transitionDuration: "0.2s" }} className={styles.leftDiv}>

                <Triangle />
                <TwoHalfCircles />
                <TwoHalfCircles />
                <div className={styles.stick1}></div>
                <div className={styles.stick2}></div>

            </div>

            <div style={{ transform: `translate(${translate.x}px, ${translate.y}px)`, transitionDuration: "0.1s" }} className={styles.rightDiv}>

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