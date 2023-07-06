"use client"
import React from "react";
import Link from "next/link"
import styles from '@/styles/navbar.module.css'

type P = {item: string}

const navbarData = {
  pages: [
      {
      title: 'Home',
      url: '/',
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
