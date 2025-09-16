import type { Metadata } from "next";
import Designer from "./components/designer/designer";
import FooterSection from "./components/footer/footer";
import Hero from "./components/hero/hero";
import ReviewSection from "./components/reviews/reviewSection";
import WorkSection from "./components/work/workSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vassel Creative | Web Design & Development",
  description:
    "Independent developer crafting fast, accessible, and beautiful websites. Showcasing unique flair and transforming visions into reality.",
  keywords: [
    "web design",
    "web development",
    "web engineering",
    "Next.js developer",
    "freelance developer",
    "responsive websites",
  ],
  openGraph: {
    title: "Vassel Creative | Web Design & Development",
    description:
      "Independent developer crafting fast, accessible, and beautiful websites. Showcasing unique flair and transforming visions into reality.",
    url: "https://vasselcreative.com",
    siteName: "Vassel Creative",
    images: [
      {
        url: "https://vasselcreative.com/bespokewebsites.png",
        width: 1200,
        height: 630,
        alt: "Vassel Creative preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section aria-label="Hero">
          <Hero />
        </section>

        <section aria-label="Reviews">
          <ReviewSection />
        </section>

        <section aria-label="Work showcase">
          <WorkSection />
        </section>

        <section aria-label="Designer info">
          <Designer />
        </section>
      </main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
