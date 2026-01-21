"use client";

import { useSearchParams } from "next/navigation";

export default function ProductClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div>
      Product ID: {id}
    </div>
  );
}
