"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header style={{ padding: 12, borderBottom: "1px solid #ccc" }}>
      <button id="open-search" type="button" onClick={() => router.push("/search")}>
        Open search
      </button>
    </header>
  );
}
