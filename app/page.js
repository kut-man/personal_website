import styles from './page.module.scss'
import ContactIcons from './components/contact_icons/contact_icons';
import Projects from './components/projects/projects';
import ButtonContact from './components/buttonContact/buttonContact';
import Image from 'next/image';
import ParallaxEffect from './components/parallax/ParallaxEffect';
import Experiments from './components/experiments/experiments';

const projects = [
  {
    id: 1,
    projectName: "Ryder",
    projectDescription: "Experience the Best of Australian Fashion with RYDER.",
    projectImage: 'https://github.com/kut-man/personal_website/assets/73386100/1c4a7265-3812-47a9-9c20-797e7185c3f2'
  },
  {
    id: 2,
    projectName: "Personal Website",
    projectDescription: "Discover my professional journey and expertise at a glance.",
    projectImage: 'https://github.com/kut-man/personal_website/assets/73386100/81ec32ce-9ae1-477d-bfd3-b6a1c66ce61b'
  },
  {
    id: 3,
    projectName: "Kutman",
    projectDescription: "Interactive virtual portfolio: showcasing my skills and personality",
    projectImage: 'https://github.com/kut-man/personal_website/assets/73386100/29d2fb5c-ddd5-4cb9-a534-71d2b78a1aa5'
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
        <Experiments />
      </div>

    </>

  )
}
