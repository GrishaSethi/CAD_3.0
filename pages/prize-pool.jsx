import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PrizePoolPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/prize');
  }, [router]);

  return null;
} 