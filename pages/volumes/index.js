import Link from "next/link";
import { introduction } from "resources/lib/data";
import { volumes } from "resources/lib/data";

export default function Home() {
  return (
    <>
      <Link href="/">Home</Link>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            {volumes[0].title}
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">{volumes[1].title}</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            {volumes[2].title}{" "}
          </Link>
        </li>
      </ul>
    </>
  );
}
