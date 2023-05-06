import Link from 'next/link';

import styles from '../../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <Link href="/"><span className={styles.navLink}>Home</span></Link>
      <Link href="/posts"><span className={styles.navLink}>Posts</span></Link>
      <Link href="/reading"><span className={styles.navLink}>Reading</span></Link>
    </nav>
  );
}
