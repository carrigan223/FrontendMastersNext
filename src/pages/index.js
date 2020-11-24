import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Hello Index Pgae!</h1>
      <Link href="/notes">
        <a>Link</a>
      </Link>
    </div>
  );
};

export default Page;
