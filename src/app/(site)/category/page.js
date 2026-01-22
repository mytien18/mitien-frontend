import { Suspense } from "react";
import CategoryClient from "./CategoryClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CategoryClient />
    </Suspense>
  );
}
