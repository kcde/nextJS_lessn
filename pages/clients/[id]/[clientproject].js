import { useRouter } from 'next/router';

const SelectedClientProject = () => {
  const router = useRouter();

  console.log(router.pathname);
  return <h1>Selected client Project</h1>;
};

export default SelectedClientProject;
