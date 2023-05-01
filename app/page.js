import styles from './page.module.scss'
import { Libre_Baskerville } from '@next/font/google';
import ContactIcons from './components/contact_icons/contact_icons';
import Projects from './components/projects/projects';
import Button from './components/button/button';
import Image from 'next/image';
import ParallaxEffect from './components/parallax/ParallaxEffect';

export const baskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
  variable: '--font-baskerville'
})

export default function Home() {
  return (
    <>
      <ParallaxEffect />

      <main className={styles.main}>

        <Image
          className={styles.backgroundLogo}
          alt="Logo"
          src="https://user-images.githubusercontent.com/73386100/231491201-77f9d1d4-ead5-434f-9959-bb07b9bf0369.png"
          width={330}
          height={330}
        />

        <div className={styles.mainPage}>

          <div className={styles.content}>
            <h1>Kutman Eshenkulov</h1>
            <p className={baskerville.variable}>Interactive Front-end Developer</p>
            <Button text={"About Me"} />

          </div>

          <ContactIcons props={{ nav: false }} />



        </div>

      </main>

      <div className={styles.container}>
        <h6>CASE STUDIES</h6>
        <h4>Latest Works</h4>
        <Projects nav={false} />
      </div>

    </>

  )
}
