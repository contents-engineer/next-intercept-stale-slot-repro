"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// After a soft navigation to a URL with no matching @modal route, the slot keeps
// rendering this segment. Render the modal only while the URL is /search so it
// does not stay on top of the next page.
export default function SearchModal() {
  const pathname = usePathname();
  if (pathname !== "/search") return null;

  return (
    <div id="search-modal" role="dialog" style={{ position: "fixed", inset: "25% 20%", background: "white", border: "2px solid black", padding: 16 }}>
      <p>Search modal (intercepted)</p>
      <Link id="result-link" href="/items/1">Go to item 1</Link>
    </div>
  );
}
