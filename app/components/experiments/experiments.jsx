import CodePen from "../codePen/codePen";
import styles from './page.module.scss'

export default function Experiments() {
  return (
    <div className={styles.container}>
        <CodePen/>
        <CodePen/>
        <CodePen/>
        <CodePen/>
    </div>
  )
}
