"use client"
import React from "react";
import Link from "next/link"
import styles from '@/styles/components/navbar.module.scss'
import NavLink from "./navlink";

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
      {
        title: 'Portfolio',
        url: '/portfolio'
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
          {/* <div>
            <NavLink url="/" className={styles.link}>
              Home
            </NavLink>
          </div> */}
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
