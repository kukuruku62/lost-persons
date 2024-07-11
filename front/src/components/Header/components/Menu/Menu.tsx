"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hrefsMenu } from "@/constants/hrefs";
import styles from "./Menu.module.scss";


const Menu = ()  => {
  
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {hrefsMenu.map(({ id, name, link }) => (
          <li key={id}>
            <Link  href={link} className={`${pathname === link ? styles["active"] : styles["a"]}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}


export { Menu }