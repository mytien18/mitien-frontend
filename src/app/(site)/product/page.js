import { Suspense } from 'react';
import ProductClient from './CategoryClient';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProductClient />
    </Suspense>
  );
}
