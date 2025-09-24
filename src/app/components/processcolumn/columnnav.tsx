"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/components/processcolumn/columnnav.module.css";

const links = [
  { name: "Chat & Review", href: "#chat" },
  { name: "Design & Development", href: "#design" },
  { name: "Aftercare", href: "#aftercare" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <div className={styles.navLinksAlt}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${
              pathname === link.href ? styles.linkActive : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
