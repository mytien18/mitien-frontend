import { Suspense } from 'react';
import VerifyOtpClient from './VerifyOtpClient';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <VerifyOtpClient />
    </Suspense>
  );
}
