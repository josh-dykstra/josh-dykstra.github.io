import Link from 'next/link';

import { getSortedPostsData } from '../../lib/utils/posts';

export default function index({ posts }) {
  return (
    <div>
      {posts.map((post) => (<Link href={`posts/${post.id}`}>{post.title}</Link>))}
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
