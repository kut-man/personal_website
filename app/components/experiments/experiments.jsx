"use client"

import CodePen from "./codePen/codePen";
import styles from './page.module.scss'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Experiments = () => {

  const [ref, inView] = useInView({threshold: .5});
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    inView && setIsInView(true);
  }, [inView])

  return (
    <div inView={`${isInView ? true : false}`} ref={ref} className={styles.container}>
        <CodePen gif={"http://riccardozanutta.com/img/codepen-loader.gif"}/>
        <CodePen gif={"http://riccardozanutta.com/img/search-context.gif"}/>
        <CodePen gif={"https://github.com/kut-man/personal_website/assets/73386100/57dc7593-3e95-4363-a80f-b09b16d64eb8"}/>
        <CodePen gif={"http://riccardozanutta.com/img/x-times.gif"}/>
    </div>
  )
}

export default Experiments;