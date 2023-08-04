import React from 'react';
import { BsGithub, BsDiscord } from "react-icons/bs";
import Link from "next/link";
import styles from '@/styles/components/socials.module.scss'

export default function SocialsLink(props: {name: string, logo: React.ReactNode, url: string, Name: string }) {
  return (
    <div>
      <div className={styles.column}>
        <Link className={props.Name} href={props.url} >
          {props.logo} {" "} {props.name}
        </Link>
      </div>
    </div>
  );
}


function Github() {
  return (
    <div className="hero">
      <SocialsLink name={"Github"} logo={<BsGithub size={30} color='black'/>} url={"https://github.com/spacey-sooty"} Name={styles.gh} />
    </div>
  )
}

function Discord() {
  return (
    <div className='hero'>
      <SocialsLink name={"Discord"} logo={<BsDiscord size={30} color='white' />} url="" Name={styles.discord} />
    </div>
  )
}

export { Github, Discord }