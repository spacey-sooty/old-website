import styles from '@/styles/pages/home.module.scss'
import Image from 'next/image'

// export async function getProps(): Promise<{ props: { hello: Promise<string>; }; }> {
// export async function getProps(): Promise<any> {
export async function getProps() {
  try {
    const hello: any = await fetch(process.env.URL + "/api/hello");

    if (!hello) {
      throw new Error("Failed to fetch data!");
    }

    var props : typeof hello = hello;

    // return { props: { hello: hello.text() } };
    return props.text();
  } catch(err) {
    console.log(err);
  }
};

export default async function Home() {
  const w = 794 * 0.4;
  const h = 968 * 0.4;

  const data = await getProps();

  return(
    <div className='hero'>
      <div>
        <div>
          <h1 className={styles.heading}> Hi I&apos;m Isaac Turner! </h1>
          {/* <h1 className={styles.heading}> {data.props.hello} </h1> */}
          <p className={styles.pronouns}> They / Them </p>
        </div>
        <Image src="/me.png" alt="Isaac Turner" width={w} height={h} className={styles.image} priority />
        <p className={styles.text}>
        I am a student, software developer and programmer for 
        <a href="http://firstaustralia.org/programs/first-robotics-competition/" className="link"> FIRST Robotics Competition </a> 
        Team <a href="" className="link"> 4788 Can&apos;t Control </a> from Perth, Western Australia.
          <br /> To learn more check out the other pages! 
          <br /> The source code for this website can be found on <a href='https://github.com/spacey-sooty/Isaac-T' className="link">Github</a>
        </p>
      </div>
    </div>
  )
}
