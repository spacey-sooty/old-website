import styles from '@/styles/pages/page.module.scss'
import Image from 'next/image'

export default function Home() {
  const w = 1112 * 0.25;
  const h = 1352 * 0.25;
  return(
    <div>
      <div>
        <h1 className={styles.heading}> Hi I am Isaac Turner! </h1>
        <Image src="/me.jpg" alt="Isaac Turner" width={w} height={h} className={styles.image} priority />
        <p className={styles.text}>
        I am a student, software developer and programmer for 
        <a href="http://firstaustralia.org/programs/first-robotics-competition/" className={styles.link}> FIRST Robotics Competition </a> 
        Team <a href="" className={styles.link}> 4788 Cant Control </a> from Perth, Western Australia. 
        I program a variety of things for the team and as an individual. Some common of my things I code are website frontends, robots and computer vision. 
        I am also learning to code website backends, operating systems and compilers. 
        </p>
      </div>
    </div>
  )
}
