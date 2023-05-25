"use client"

import CodePen from "./codePen/codePen";
import styles from './page.module.scss'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Experiments = () => {

  const [ref, inView] = useInView();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    inView && setIsInView(true);
  }, [inView])

  return (
    <div inView={`${isInView ? true : false}`} ref={ref} className={styles.container}>
        <CodePen/>
        <CodePen/>
        <CodePen/>
        <CodePen/>
    </div>
  )
}

export default Experiments;