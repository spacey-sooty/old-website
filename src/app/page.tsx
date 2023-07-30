import styles from '@/styles/pages/page.module.scss'
import Image from 'next/image'

export default function Home() {
  const w = 794 * 0.44;
  const h = 968 * 0.44;
  return(
    <div className='hero'>
      <div>
        <h1 className={styles.heading}> Hi my name is Isaac Turner! </h1>
        <Image src="/me.png" alt="Isaac Turner" width={w} height={h} className={styles.image} priority />
        <p className={styles.text}>
        I am a student, software developer and programmer for 
        <a href="http://firstaustralia.org/programs/first-robotics-competition/" className="link"> FIRST Robotics Competition </a> 
        Team <a href="" className="link"> 4788 Can&apos;t Control </a> from Perth, Western Australia.
          <br /> To learn more check out the other pages! 
          <br /> The source code for this website can be found on <a href='https://github.com/spacey-sooty/Isaac-T' className="link">Github</a>
        </p>
      </div>
    </div>
  )
}
