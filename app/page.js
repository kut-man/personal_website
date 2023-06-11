import styles from './page.module.scss'
import ContactIcons from './components/contactIcons/contactIcons';
import Projects from './components/projects/projects';
import Button from './components/button/animatedButton';
import Image from 'next/image';
import ParallaxEffect from './components/parallax/ParallaxEffect';
import Experiments from './components/experiments/experiments';
import { projects } from './src/projects';

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
          priority={true}
        />

        <section className={styles.mainPage}>

          <div className={styles.content}>
            <h1>Kutman Eshenkulov</h1>
            <p>Interactive Front-end Developer</p>
            <div className={styles.buttonContainer}>
              <Button text={"About Me"} />
            </div>
          </div>

          <ContactIcons />

        </section>

      </main>

      <div className={styles.container}>
        <h6>CASE STUDIES</h6>
        <h4>Latest Works</h4>

        {projects.map(obj => <Projects key={obj.id} {...obj} />)}

      </div>

      <div className={styles.container}>
        <h6>EXPERIMENTS & OPEN SOURCE</h6>
        <h4>Web is fun.</h4>
        <Experiments />
      </div>

    </>

  )
}
