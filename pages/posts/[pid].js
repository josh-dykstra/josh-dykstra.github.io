import PropTypes from 'prop-types';

import { getSortedPostsData, getPost } from '../../lib/utils/posts';

import styles from '../../styles/posts.module.scss';

export default function Post({ post }) {
  return (
    <>
      <h1 className={styles.title}>{post.title}</h1>
      <h2 className={styles.date}>{post.date}</h2>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export async function getStaticPaths() {
  const posts = getSortedPostsData();

  const paths = posts.map((post) => ({
    params: { pid: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.pid);
  return {
    props: {
      post,
    },
  };
}
