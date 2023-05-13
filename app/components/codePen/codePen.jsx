import styles from './page.module.scss'

export default function CodePen() {
    return (
        <a className={styles.link} href="http://codepen.io/rickzanutta/pen/yjaeB" target="_blank" rel="noopener">
            <div className={styles.container}>
                <h1>01</h1>
                <div className={styles.title}>
                    <h5>TITLE</h5>
                    <p>CSS3 spin preloader + prelaod Page</p>
                </div>
                <div className={styles.number}>
                    <h4>01</h4>
                    <div></div>
                </div>
            </div>
            <div className={styles.circle}></div>
        </a>
    )
}
