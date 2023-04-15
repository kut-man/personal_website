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
        <div ref={ref} className={styles.projectsContainer}>

            <h6>CASE STUDIES</h6>
            <h4>Latest Works</h4>

            <div className={styles.firstProjectContainer}>
                <img src="http://riccardozanutta.com/img/cerasa-work.jpg" alt="Project Image"></img>
                <h5>Cerasa Redesing</h5>
                <p>Leader in bathroom furniture since 1983.</p>
                <Button />
                <div className={`${isInView ? styles.show : ''} ${styles.revealer}`} ></div>
            </div>

        </div>
    )
}

export default Projects;