import Link from "next/link";
import { introduction } from "resources/lib/data";
import { volumes } from "resources/lib/data";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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
      <button
        type="button"
        onClick={() => {
          if (confirm("Are you the KING?")) {
            router.push(`/volumes/${volumes[2].slug}`);
          }
        }}
      >
        Are you the KING?
      </button>
    </>
  );
}
