"use client";

import styles from './page.module.scss'
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Button from '../button/button';

const Projects = ({ id, projectName, projectDescription, projectImage, projectLink }) => {

    const [isInView, setIsInView] = useState(false);
    const [ref, inView] = useInView();

    useEffect(() => {
        inView && setIsInView(true);
    }, [inView]);

    return (
        <article ref={ref} className={styles.projectContainer}
            style={id % 2 == 0 ? { marginRight: "50px", backgroundImage: `url(${projectImage})` } : { marginLeft: "50px", backgroundImage: `url(${projectImage})` }}>
            <span style={id % 2 == 0 ? { left: "-5%" } : { right: "0" }} className={styles.projectNumber} >0{id}</span>
            <div className={`${isInView ? styles.show : ''} ${styles.revealer}`}></div>
            <div className={styles.project}>

                <h1 className={styles.projectName}>{projectName}</h1>
                <p>{projectDescription}</p>

                <Button onClick={() => window.open(projectLink) } text={"Case Study"} />
            </div>
        </article>
    )
}

export default Projects;