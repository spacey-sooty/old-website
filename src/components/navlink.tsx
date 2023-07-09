import React from 'react'
import Link from 'next/link'

export default class NavLink extends React.Component {
  constructor(_url: string) {
    super(_url)
    this.url = _url;
  }

  isActive(url: string): string {
    return "hello"
  }

  url: string;

  render(): React.ReactNode {
      return (
        <Link href="" className={this.isActive(this.url)}>
        </Link>
      )
  }
}
