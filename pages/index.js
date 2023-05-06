/* eslint-disable max-len */
import classnames from 'classnames';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.body}>
          Thanks for visiting my personal site! Here you'll find a bit more about me,
          {' '}
          <b>Josh Dykstra</b>
          , my writings about engineering management and some book recommendations. You can find my latest posts here:
        </p>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.headshotContainer}>
          <img className={styles.headshot} src="https://avatars.githubusercontent.com/u/5152427?v=4" alt="Josh Dykstra with a green background" />
        </div>
        <h2 className={styles.title2}>About me</h2>
        <p className={styles.body}>
          I live in the Potrero Hill neighborhood of San Francisco with my wife and our cat, Lily. I work as an engineering manager at Airbnb leading a team of engineers working on Airbnb's search product. Outside of work I spend my time discovering new parts of San Francisco, playing basketball, and exploring the great outdoors. If you're interested in connecting, please reach out on
          {' '}
          <a href="https://www.linkedin.com/in/josh-dykstra/">LinkedIn</a>
          .
        </p>
      </div>
    </div>
  );
}
