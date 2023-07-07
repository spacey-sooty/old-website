import styles from '@/styles/pages/page.module.scss'
import Image from 'next/image'

export default function Home() {
  return(
    <div>
      <div>
        <h1 className={styles.heading}> Hi I am Isaac Turner! </h1>
        <Image src="/me.jpg" alt="Isaac Turner" width={417} height={507} className={styles.image}/>
        <p className={styles.text}>
        I am a student from Western Australia and a programmer for 
        <a href="http://firstaustralia.org/programs/first-robotics-competition/" className={styles.link}> FIRST Robotics Competition </a> 
        Team <a href="" className={styles.link}> 4788 Cant Control </a>. 
        I program a variety of things for the team and as an individual. Some common of my specialties are website frontends, robots and computer vision. 
        I am also learning to code website backends, operating systems and compilers. 
        </p>
      </div>
    </div>
  )
}
