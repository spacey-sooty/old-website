import styles from '@/styles/pages/about.module.scss'

export default function About() {
  return (
    <div>
      <div className={styles.bodyHero}>
        <h1 className={styles.title}> About Me </h1>
        <p>
          I program a variety of things for the team and as an individual. Some common things I code are website frontends, robots, and computer 
          vision systems. I am also learning to code website backends, operating systems, and compilers. I program in many different languages 
          but some of my favourite&apos;s are Rust, Typescript and SASS. 
        </p>
      </div>
    </div>
  )
}
