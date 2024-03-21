import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      NotFound
      <p>Sorry, this page you are looking for does not exists.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
