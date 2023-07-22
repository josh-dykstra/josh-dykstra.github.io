import Link from 'next/link';

import styles from '../../styles/components/postcard.module.scss';

type Props = {
  date: string,
  href: string,
  imageUrl: string,
  title: string,
};

export default function PostCard(props:Props) {
  const {
    date,
    href,
    imageUrl,
    title,
  } = props;

  return (
    <Link className={styles.container} href={href}>
      {imageUrl && (
      <img
        alt=""
        className={styles.thumbnail}
        src={imageUrl}
      />
      )}
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
    </Link>
  );
}
