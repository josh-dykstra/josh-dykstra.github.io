import { GetStaticProps } from 'next';
import { getSortedPostsData } from '../../lib/utils/posts';
import PostCard from '../../lib/components/postcard';
import { Post } from '../../lib/types';

import styles from '../../styles/posts.module.scss';

type Props = {
  posts: Array<Post>;
};

export default function index({ posts }: Props) {
  return (
    <div className={styles.postGrid}>
      {posts.map((post) => (
        <PostCard
          date={post.date}
          href={`posts/${post.id}`}
          imageUrl={post.thumbnailUrl || ''}
          key={post.id}
          title={post.title}
        />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};
