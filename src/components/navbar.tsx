"use client"
import React from "react";
import styles from '@/styles/components/navbar.module.scss'
import Link from 'next/link'

function isActive(url: string): string {
  var root = window.location.host;
  url = "http://" + root + url;
  var className = (url == window.location.href) ? styles.active : styles.inactive;
  return className;
}

function NavLink(input: {title: string, url: string}) {
  return (
      <Link href={input.url} className={isActive(input.url)} onClick={window.location.reload}>
        {input.title}
      </Link>
  )
}

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

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <>
        <div>
          <NavLink title="Isaac-T" url="/" />
        </div>
        <div className={styles.right}>
          {navbarData.pages.map((page) => (
            <NavLink key={page.title} title={page.title} url={page.url} />
          ))}
        </div>
      </>
    </div>
  )
}
