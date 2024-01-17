import { volumes } from "resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import BookCover from "resources/public/images/the-two-towers.png";

export default function PartTwo() {
  const dataPartTwo = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">Back to All Volumes</Link>
      <h1>{dataPartTwo.title}</h1>
      <p>{dataPartTwo.description}</p>

      <ul>
        {dataPartTwo.books.map((id) => (
          <li key={id}>
            {id.ordinal} : {id.title}
          </li>
        ))}
      </ul>
      <Image
        src={BookCover}
        height={230}
        width={140}
        alt="Book Cover of The Two Towers"
      />
      <br></br>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous</Link>
      <br></br>
      <Link href="/volumes/the-return-of-the-king">Next</Link>
    </>
  );
}
