import { volumes } from "resources/lib/data";
import Link from "next/link";

export default function PartThree() {
  const dataPartThree = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="/">Back to All Volumes</Link>
      <h1>{dataPartThree.title}</h1>
      <p>{dataPartThree.description}</p>

      <ul>
        <li>
          {volumes[2].books[0].ordinal}: {volumes[2].books[0].title}
        </li>
        <li>
          {volumes[2].books[1].ordinal}: {volumes[2].books[1].title}
        </li>
      </ul>
      <Link href="/volumes/the-two-towers">Previous</Link>
    </>
  );
}
