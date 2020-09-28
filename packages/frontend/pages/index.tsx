import { Fragment } from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Fragment>
      <main>
        <h1>Welcome to Next.js!</h1>
        <Link href="/products">Products</Link>
      </main>
    </Fragment>
  );
}
