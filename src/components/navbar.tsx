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
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    function getActive(): number {
      var root = window.location.protocol + "//" + window.location.host;
      var url = window.location.href;
      var num;
      if (root + "/about" == url) {
        num = 1;
      } else if (root + "/portfolio" == url) {
        num = 2;
      } else if (root + "socials" == url) {
        num = 3;
      } else {
        num = 0;
      }

      return num;
    }
    
    setActive((active) => active = getActive())
  }, []);

  var html;

  if (active == 0) {
    html = (
      <div>
        <Link href="/" className={styles.active}>
          Isaac-T
        </Link>
      </div>
    )
  } else if (active == 1) {
    html = (
      <div>
        <Link href="/" className={styles.inactive}>
          Isaac-T
        </Link>
      </div>
    )
  } else if (active == 2) {
    html = (
      <div>
        <Link href="/" className={styles.inactive}>
          Isaac-T
        </Link>
      </div>
    )
  } else {
    html = (
      <div>
        <Link href="/" className={styles.inactive}>
          Isaac-T
        </Link>
      </div>
    )
  }

  return html;
};
