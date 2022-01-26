import { useRouter } from 'next/router';
const SelectedProject = () => {
  const router = useRouter();

  console.log(router);

  return <h1>Selected Projec</h1>;
};

export default SelectedProject;
