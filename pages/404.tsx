import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function custome404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Ooopss...</h1>
      <h1 className="title-not-found">Halaman tidak ditemukan</h1>
    </div>
  );
}
