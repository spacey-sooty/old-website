"use client"
import React from "react";
import Link from "next/link"
import styles from '@/styles/components/navbar.module.scss'

type P = {item: string}

const navbarData = {
  pages: [
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'Socials',
        url: '/socials',
      },
  ],
}

export default class Navbar extends React.Component {
  constructor(props: P) {super(props)}

  render(): React.JSX.Element {
    return (
      <div className={styles.navbar}>
        <>
          <div>
            <Link href="/" className={styles.link}>
              Isaac-T
            </Link>
          </div>
          <div>
            {navbarData.pages.map((page) => (
              <Link key={page.title} href={page.url} className={styles.link}>
                {page.title}
              </Link>
            ))}
          </div>
        </>
      </div>
    )
  }
}
