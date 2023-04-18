"use client";

import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import styles from "./page.module.scss";
import { HalfCircle, Triangle, TwoHalfCircles } from "@/app/src";

const ParallaxEffect = () => {
    const sceneRef = useRef(null);

    console.log("Rerender")

    useEffect(() => {
        const parallax = new Parallax(sceneRef.current, {
            invertX: false
        });
        return () => {
            parallax.destroy();
        };
    }, []);

    return (
        <div ref={sceneRef} className={styles.div}>
            <div className={styles.leftDiv} data-depth="0.2" data-orientation="horizontal">

                <Triangle />
                <TwoHalfCircles />
                <TwoHalfCircles />
                <div className={styles.stick1}></div>
                <div className={styles.stick2}></div>

            </div>

            <div className={styles.rightDiv} data-depth="-0.5" data-orientation="vertical">

                <HalfCircle />
                <Triangle />
                <HalfCircle />
                <Triangle />
                <HalfCircle />
                <div className={styles.stick}></div>

            </div>
        </div>
    );
};

export default ParallaxEffect;
