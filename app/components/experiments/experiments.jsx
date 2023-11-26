"use client"

import CodePen from "./codePen/codePen";
import styles from './page.module.scss'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Experiments = () => {

  const [ref, inView] = useInView({threshold: .4});
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    inView && setIsInView(true);
  }, [inView])

  return (
    <div id="experiments" inview={`${isInView ? true : false}`} ref={ref} className={styles.container}>
        <CodePen gif={"/loader.gif"}/>
        <CodePen gif={"/search-context.gif"}/>
        <CodePen gif={"/burger.gif"}/>
        <CodePen gif={"/x-times.gif"}/>
    </div>
  )
}

export default Experiments;