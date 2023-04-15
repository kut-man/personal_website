"use client";

import styles from './page.module.scss'
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Button from '../button/button';

const Projects = () => {

    const [isInView, setIsInView] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        inView ? setIsInView(true) : setIsInView(false);
    }, [inView]);

    return (
        <div className={styles.container}>
            <h6>CASE STUDIES</h6>
            <h4>Latest Works</h4>
            <div ref={ref} className={styles.projectContainer}>
                <div className={`${isInView ? styles.show : ''} ${styles.revealer}`}></div>
                <div className={styles.project}>

                    <h5>Cerasa Redesing</h5>
                    <p>Leader in bathroom furniture since 1983.</p>

                    <div className={styles.button}>
                        <button>Case Study</button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
                            <path
                                d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;