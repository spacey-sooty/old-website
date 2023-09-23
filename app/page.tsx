import styles from './home.module.scss';
import Image from 'next/image';

export default function Home() {
  var img_scale = 3.8;
  return (
    <div>
      <div>
        <h1>Hi, I&apos;m Isaac Turner!</h1>
        <h3 className={styles.pronouns}>They/Them</h3>
      </div>
      <Image
      src="/me.jpg"
      alt="selfie"
      width={1512 / img_scale}
      height={2016 / img_scale}
      className={styles.selfie }
      />
    </div>
  )
}
