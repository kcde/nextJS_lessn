import { useRouter } from 'next/router';
import Link from 'next/link';

const Clients = () => {
  const clients = [
    { id: 'kc', name: 'keside ezeala' },
    { id: 'lw', name: 'ludwig wrangler' },
  ];
  const router = useRouter();

  console.log(router.pathname);
  return (
    <div>
      <h1>Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
