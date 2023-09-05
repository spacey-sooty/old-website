"use client"
import React from "react";
import styles from '@/styles/components/navbar.module.scss';
import Link from "next/link";

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
};

type Props = {};

export default function Navbar() {
  React.useEffect(() => {
    function isActive(url: string): string {
      var root = window.location.host;
      url = "http://" + root + url;
      var className = (url == window.location.href) ? styles.active : styles.inactive;
      return className;
    }
  }, []);

  return (
    <div>
      <Link href="/">
        Isaac-T
      </Link>
    </div>
  )
};
