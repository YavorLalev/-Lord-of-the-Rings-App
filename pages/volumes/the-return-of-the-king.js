import { volumes } from "resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import BookCover from "resources/public/images/the-return-of-the-king.png";

export default function PartThree() {
  const dataPartThree = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="/volumes">Back to All Volumes</Link>
      <h1>{dataPartThree.title}</h1>
      <p>{dataPartThree.description}</p>

      <ul>
        {dataPartThree.books.map((id) => (
          <li key={id}>
            {id.ordinal} : {id.title}
          </li>
        ))}
      </ul>
      <Image
        src={BookCover}
        height={230}
        width={140}
        alt="Book Cover of The Return of the King"
      />
      <br></br>
      <Link href="/volumes/the-two-towers">Previous</Link>
    </>
  );
}
