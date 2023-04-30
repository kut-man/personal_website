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
                <span className={styles.projectNumber} >01</span>
                <div className={`${isInView ? styles.show : ''} ${styles.revealer}`}></div>
                <div className={styles.project}>

                    <h5 className={styles.projectName}>Cerasa Redesing</h5>
                    <p>Leader in bathroom furniture since 1983.</p>

                    <Button text={"Case Study"} />
                </div>
            </div>
        </div>
    )
}

export default Projects;