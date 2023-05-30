import { getSortedPostsData } from '../../lib/utils/posts';
import PostCard from '../../lib/components/postcard';

import styles from '../../styles/posts.module.scss';

export default function index({ posts }) {
  return (
    <div className={styles.postGrid}>
      {posts.map((post) => (
        <PostCard
          date={post.date}
          href={`posts/${post.id}`}
          imageUrl={post.thumbnailUrl}
          key={post.id}
          title={post.title}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
