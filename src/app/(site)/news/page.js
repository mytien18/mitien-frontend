import { Suspense } from 'react';
import NewsClient from './CategoryClient';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <NewsClient />
    </Suspense>
  );
}
