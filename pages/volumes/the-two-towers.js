import { volumes } from "resources/lib/data";
import Link from "next/link";

export default function PartTwo() {
  const dataPartTwo = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">Back to All Volumes</Link>
      <h1>{dataPartTwo.title}</h1>
      <p>{dataPartTwo.description}</p>

      <ul>
        <li>
          {volumes[1].books[0].ordinal}: {volumes[1].books[0].title}
        </li>
        <li>
          {volumes[1].books[1].ordinal}: {volumes[1].books[1].title}
        </li>
      </ul>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous</Link>
      <br></br>
      <Link href="/volumes/the-return-of-the-king">Next</Link>
    </>
  );
}
