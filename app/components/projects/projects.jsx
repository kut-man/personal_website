"use client";

import styles from './page.module.scss'
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Button from '../button/button';

const Projects = ({ id, projectName, projectDescription, projectImage }) => {

    const [isInView, setIsInView] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        inView && setIsInView(true);
    }, [inView]);

    return (
        <div ref={ref} className={styles.projectContainer}
            style={id % 2 == 0 ? { marginRight: "50px", backgroundImage: `url(${projectImage})` } : { marginLeft: "50px", backgroundImage: `url(${projectImage})` }}>
            <span style={id % 2 == 0 ? { left: "-5%" } : { right: "0" }} className={styles.projectNumber} >0{id}</span>
            <div className={`${isInView ? styles.show : ''} ${styles.revealer}`}></div>
            <div className={styles.project}>

                <h5 className={styles.projectName}>{projectName}</h5>
                <p>{projectDescription}</p>

                <Button text={"Case Study"} />
            </div>
        </div>
    )
}

export default Projects;