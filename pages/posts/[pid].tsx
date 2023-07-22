import { GetStaticProps, GetStaticPaths } from 'next';

import { getSortedPostsData, getPost } from '../../lib/utils/posts';
import { Post } from '../../lib/types';

import styles from '../../styles/posts.module.scss';

type Props = {
  post: Post;
};

export default function PostContent({ post }: Props) {
  return (
    <>
      <h1 className={styles.title}>{post.title}</h1>
      <h2 className={styles.date}>{post.date}</h2>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPostsData();

  const paths = posts.map((post) => ({
    params: { pid: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || Array.isArray(params.pid) || !params.pid) return { props: {} };

  const post = getPost(params.pid);
  return {
    props: {
      post,
    },
  };
};
