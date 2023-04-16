import { Triangle, HalfCircle, TwoHalfCircles } from "@/app/src";
import styles from './page.module.scss'

export default function LeftParallax() {
    return (
        <div className={styles.leftDiv}>
            <HalfCircle />
            <Triangle />
            <TwoHalfCircles />
            <HalfCircle />
            <Triangle />
            <TwoHalfCircles />
            <HalfCircle />
            <Triangle />
            <TwoHalfCircles />
        </div>
    )
}
