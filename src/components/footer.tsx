import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import styles from '@/styles/components/footer.module.scss'

export default function Footer() {
  return (
    <div>
      <div className={styles.bottomPageLeft}>
        <p> Copyright (c) 2023 Isaac Turner </p>
      </div>
      <div className={styles.bottomPageRight}>
        <Link href="https://github.com/spacey-sooty/Isaac-T" className={styles.sourceCode}>
          {"Source Code"} <BsGithub size={25} color='black'/>
        </Link>
      </div>
    </div>
  )
}