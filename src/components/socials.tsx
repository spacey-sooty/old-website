"use client"
import React from 'react';
import { BsGithub, BsDiscord } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import styles from '@/styles/components/socials.module.scss'

export default function SocialsLink(props: {name: string, logo: React.ReactNode, url: string, Name: string }) {
  return (
    <div>
      <Head>
        <title>{`${props.name} redirect`}</title>
        <meta
          name="description"
          content={`${props.name} redirect page.`}
        />
        <meta key="robots" name="robots" content="index,follow" />
        <meta key="googlebot" name="googlebot" content="index,follow" />
      </Head>
      <div className="column">
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
      <SocialsLink name={"Github"} logo={<BsGithub size={35} color='black'/>} url={"https://github.com/spacey-sooty"} Name={styles.gh} />
    </div>
  )
}

function Discord() {
  return (
    <div className='hero'>
      <SocialsLink name={"Discord"} logo={<BsDiscord size={35} color='black' />} url="" Name={styles.discord} />
    </div>
  )
}

export { Github, Discord }