"use client"
import styles from '@/styles/components/post.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

class Github extends React.Component {
  
  render(): React.ReactNode {
      return (
        <div>
          <Link href="https://github.com/spacey-sooty" className={styles.link}> <Image src="/me.jpg" alt="My Github Profile" width={208.5} height={253.5} className={styles.image} /></Link>
        </div>
      )
  }
}

export { Github }