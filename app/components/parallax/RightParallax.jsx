import { HalfCircle, Triangle } from "@/app/src";
import styles from './page.module.scss'

export default function RightParallax() {
    return (
        <div className={styles.rightDiv}>
            <HalfCircle />
            <Triangle />
            <HalfCircle />
            <Triangle />
            <HalfCircle />
            <div className={styles.stick}></div>
        </div>
    )
}
