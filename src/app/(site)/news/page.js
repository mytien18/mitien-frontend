import { Suspense } from 'react';
import NewsClient from './NewsClient';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <NewsClient />
    </Suspense>
  );
}
