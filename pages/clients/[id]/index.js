import { useRouter } from 'next/router';
const SelectedClient = () => {
  const router = useRouter();

  const navHandler = () => {
    router.push(`/clients/kc/5`);
  };
  return (
    <div>
      <h1>Selected Client</h1>

      <button onClick={navHandler}> PROJECT ALPHA</button>
    </div>
  );
};

export default SelectedClient;
