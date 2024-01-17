import { volumes } from "resources/lib/data";
import Link from "next/link";

export default function PartOne() {
  const dataPartOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/">Back to All Volumes</Link>
      <h1>{dataPartOne.title}</h1>
      <p>{dataPartOne.description}</p>
      {/* <ul>
        {volumes.map(({ slug, ordinal }) => (
          <li key={slug}>{ordinal}</li>
        ))}
      </ul> */}

      <ul>
        <li>
          {volumes[0].books[0].ordinal}: {volumes[0].books[0].title}
        </li>
        <li>
          {volumes[0].books[1].ordinal}: {volumes[0].books[1].title}
        </li>
      </ul>

      <Link href="/volumes/the-two-towers">Next</Link>
    </>
  );
}
