import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/User.module.css';

interface UserProps {
  dataUsers: Array<any>;
}
export default function index({ dataUsers }:UserProps) {
  const router = useRouter();
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/user/${user.id}`)} className={styles.card}>
          <p>{`${user.name} : ${user.email}`}</p>
        </div>
      ))}

    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
