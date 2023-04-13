import styles from './page.module.scss'
import { Libre_Baskerville } from 'next/font/google';
import ContactIcons from './components/contact_icons/contact_icons';
import Projects from './components/projects/projects';

const baskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
  variable: '--font-baskerville'
})

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainPage}>
          <div className={styles.content}>
            <h1>Kutman Eshenkulov</h1>
            <p className={baskerville.variable}>Interactive Front-end Developer</p>
            <div className={styles.aboutMeButton}>About Me</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213">
              <path
                d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607">
              </path>
            </svg>
          </div>

          <ContactIcons />

          <img className={styles.backgroundLogo} src="https://user-images.githubusercontent.com/73386100/231491201-77f9d1d4-ead5-434f-9959-bb07b9bf0369.png"
            alt="Logo">
          </img>

        </div>

        <div className={styles.mainToggleContainer}></div>
        <div className={styles.toggleContainer}>
          <div onclick="toggle()" className={styles.xIcon}></div>
          <ul className={styles.burgerNav}>
            <li>Home</li>
            <li>Case Studies</li>
            <li>Experiments</li>
            <li>Contact</li>
          </ul>

          <ContactIcons />

        </div>
      </main>

      <Projects/>

    </>

  )
}
