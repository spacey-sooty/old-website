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
            <NavLink title="Home" url="/" />
          </div>
          <div>
            {navbarData.pages.map((page) => (
              <NavLink key={page.title} title={page.title} url={page.url} />
            ))}
          </div>
        </>
      </div>
    )
  }
}
