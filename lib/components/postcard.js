import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from '../../styles/components/postcard.module.scss';

function PostCard(props) {
  const {
    date,
    href,
    imageUrl,
    title,
  } = props;

  return (
    <Link className={styles.container} href={href}>
      <img
        alt=""
        className={styles.thumbnail}
        src={imageUrl}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
    </Link>
  );
}

PostCard.propTypes = {
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostCard;
