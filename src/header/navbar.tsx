"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/header/navbar.module.css";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
];

const logoImage = {
  url: "/images/vassel_logo_alternate.svg",
  alt: "Vassel Creative logo.",
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Image src={logoImage.url} alt={logoImage.alt} width={200} height={200} />
      <div className={styles.navLinks}>
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
