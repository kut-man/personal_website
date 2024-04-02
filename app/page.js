import styles from './page.module.scss'
import ContactIcons from './components/contactIcons/contactIcons';
import Projects from './components/projects/projects';
import Button from './components/button/animatedButton';
import Image from 'next/image';
import ParallaxEffect from './components/parallax/ParallaxEffect';
import Experiments from './components/experiments/experiments';
import { projects } from './src/projects';
import Text from './components/Text';

export default function Home() {
  return (
    <>
      <ParallaxEffect />

      <main className={styles.main}>

        <Image
          className={styles.backgroundLogo}
          alt="Logo"
          src="/myLogo.png"
          width={330}
          height={330}
          priority={true}
        />

        <section className={styles.mainPage}>

          <div className={styles.content}>
            <h1>Kutman Eshenkulov</h1>
            <p>Interactive Front-end Developer</p>
            <Text/>
            <div className={styles.buttonContainer}>
              <Button text={"About Me"} />
            </div>
          </div>

          <ContactIcons />

        </section>

      </main>

      <div className={styles.container}>
        <div className={styles.line}></div>
        <span>CASE STUDIES</span>
        <h1>Latest Works</h1>

        {projects.map(obj => <Projects key={obj.id} {...obj} />)}

      </div>

      <div className={styles.container}>
        <span>EXPERIMENTS & OPEN SOURCE</span>
        <h1>Web is fun.</h1>
        <Experiments />
      </div>

    </>

  )
}
