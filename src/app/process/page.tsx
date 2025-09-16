import Footer from "@/app/components/footer/footer";
import styles from "@/app/process/page.module.css";
import ThreeColumnLayout from "@/app/components/processcolumn/threecolumn";
import ProcessHero from "@/app/components/processpagehero/processhero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Crafting Websites with Clients",
  description:
    "Discover our approach to building beautiful, responsive websites. From planning to launch, we collaborate with clients to bring their visions to life.",
  keywords: [
    "web development process",
    "website workflow",
    "web engineering",
    "client collaboration",
    "web design process",
    "responsive websites",
    "website planning",
  ],
  openGraph: {
    title: "Process | Crafting Websites with Clients",
    description:
      "Discover our approach to building beautiful, responsive websites. From planning to launch, we collaborate with clients to bring their visions to life.",
    url: "https://vasselcreative.com/process",
    siteName: "Your Brand",
    images: [
      {
        url: "https://vasselcreative.com/bespokewebsites.png",
        width: 1200,
        height: 630,
        alt: "Our web development process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Process() {
  return (
    <main className={styles.mainSection} id="main-content">
      <section className={styles.section} aria-label="Process Hero">
        <ProcessHero />
      </section>

      <section className={styles.section} aria-label="Process Steps">
        <ThreeColumnLayout />
      </section>

      <footer className={styles.section} aria-label="Footer">
        <Footer />
      </footer>
    </main>
  );
}
