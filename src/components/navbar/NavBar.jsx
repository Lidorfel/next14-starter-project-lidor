import Links from "./links/Links";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Lama
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default NavBar;
