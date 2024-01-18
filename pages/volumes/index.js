import Link from "next/link";
import { introduction } from "resources/lib/data";
import { volumes } from "resources/lib/data";

export default function Home() {
  return (
    <>
      <Link href="/">Home</Link>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
