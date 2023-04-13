"use client";

import React, { useEffect } from 'react'
import styles from './page.module.scss'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Projects = () => {

    const [isInView, setIsInView] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);



    return (
        <div className={styles.projectsContainer}>



            <h6>CASE STUDIES</h6>
            <h4>Latest Works</h4>
            <div className={styles.firstProjectContainer}>
                <img src="http://riccardozanutta.com/img/cerasa-work.jpg" alt="Project Image"></img>
                <h5>Cerasa Redesing</h5>
                <p>Leader in bathroom furniture since 1983.</p>
                <div className={styles.aboutMeButton}>Case Study</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
                    <path
                        d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                    </path>
                </svg>
                <div className={`${styles.revealer} ${isInView ? 'is-in-view' : ''}`} ref={ref}></div>
            </div>
        </div>
    )
}

export default Projects;