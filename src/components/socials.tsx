"use client"
import React from 'react';
import { BsGithub } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";

export default function SocialsLink(props: {name: string, logo: React.ReactNode, url: string}) {
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
        <Link className="icon" href={props.url}>
          {props.logo} {props.name}
          {/* <p className={styles.besideLogo}>{props.name}</p> */}
        </Link>
      </div>
    </div>
  );
}


function Github() {
  return (
    <div className="hero">
        <SocialsLink
          name={"Github"}
          logo={<BsGithub size={65}/>}
          url={"https://github.com/spacey-sooty"}
        />
    </div>
  )
}

export { Github }