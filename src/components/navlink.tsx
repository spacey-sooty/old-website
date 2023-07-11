"use client"
import React from 'react'
import Link from 'next/link'
import styles from '@/styles/components/navlink.module.scss'

function isActive(url: string): string {
  var root = window.location.host;
  url = "http://" + root + url
  var className = (url == window.location.href) ? styles.active : styles.inactive;
  return className;
}

export default function NavLink(input: {title: string, url: string}) {
  return (
      <Link href={input.url} className={isActive(input.url)} onClick={window.location.reload}>
        {input.title}
      </Link>
  )
}
