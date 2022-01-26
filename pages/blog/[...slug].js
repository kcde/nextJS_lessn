import { useRouter } from 'next/router';
const BlogPost = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>Blog post page</h1>;
};

export default BlogPost;
