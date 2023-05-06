import styles from './page.module.scss'
import ContactIcons from './components/contact_icons/contact_icons';
import Projects from './components/projects/projects';
import ButtonContact from './components/buttonContact/buttonContact';
import Image from 'next/image';
import ParallaxEffect from './components/parallax/ParallaxEffect';

const projects = [
  {
    id: 1,
    projectName: "Cerasa Redesign",
    projectDescription: "Leader in bathroom furniture since 1983.",
    projectImage: 'http://riccardozanutta.com/img/cerasa-work.jpg'
  },
  {
    id: 2,
    projectName: "Project Lato",
    projectDescription: "The Next generation Management System.",
    projectImage: 'http://riccardozanutta.com/img/cerasa-work.jpg'
  },
  {
    id: 3,
    projectName: "Villaggi La Francesca",
    projectDescription: "A green oasis on the sea of the Cinque Terre",
    projectImage: 'http://riccardozanutta.com/img/cerasa-work.jpg'
  },
  {
    id: 4,
    projectName: "Project Sportland",
    projectDescription: "The Nature of Wellness.",
    projectImage: 'http://riccardozanutta.com/img/cerasa-work.jpg'
  }
];

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
            <p>Interactive Front-end Developer</p>
            <ButtonContact text={"About Me"} />
          </div>

          <ContactIcons props={{ nav: false }} />

        </div>

      </main>

      <div className={styles.container}>
        <h6>CASE STUDIES</h6>
        <h4>Latest Works</h4>

        {projects.map(obj => <Projects key={obj.id} {...obj} />)}

      </div>

      <div className={styles.container}>
        <h6>EXPERIMENTS & OPEN SOURCE</h6>
        <h4>Web is fun.</h4>
      </div>

    </>

  )
}
