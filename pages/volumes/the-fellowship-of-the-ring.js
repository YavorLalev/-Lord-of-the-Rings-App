import { volumes } from "resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import BookCover from "resources/public/images/the-fellowship-of-the-ring.png";

export default function PartOne() {
  const dataPartOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">Back to All Volumes</Link>
      <h1>{dataPartOne.title}</h1>
      <p>{dataPartOne.description}</p>
      <ul>
        {dataPartOne.books.map((id) => (
          <li key={id}>
            {id.ordinal} : {id.title}
          </li>
        ))}
      </ul>

      <Image
        src={BookCover}
        height={230}
        width={140}
        alt="Book Cover of The Fellowship of the ring"
      />
      <br></br>
      <Link href="/volumes/the-two-towers">Next</Link>
    </>
  );
}
