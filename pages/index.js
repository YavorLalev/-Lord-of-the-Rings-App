import Link from "next/link";
import { introduction } from "resources/lib/data";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lord of the rings App</title>
      </Head>

      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <Link href="/volumes">Lord of the Rings: Volume Overview</Link>
    </>
  );
}
