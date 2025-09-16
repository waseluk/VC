import Footer from "@/app/components/footer/footer";
import ReviewSection from "@/app/components/reviews/reviewSection";
import TableSection from "@/app/components/table/tableSection";
import WorkSection from "@/app/components/work/workSection";
import WorkHero from "@/app/components/workpagehero/workhero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Portfolio of Web Design & Development",
  description:
    "Explore our portfolio of responsive, beautifully crafted websites and projects. See how we bring unique visions to life with creativity and precision.",
  keywords: [
    "web design",
    "web development",
    "web engineering",
    "portfolio",
    "projects",
    "responsive websites",
    "unique visions",
  ],
  openGraph: {
    title: "Work | Portfolio of Web Design & Development",
    description:
      "Explore our portfolio of responsive, beautifully crafted websites and projects. See how we bring unique visions to life with creativity and precision.",
    url: "https://vasselcreative.com/work",
    siteName: "Your Brand",
    images: [
      {
        url: "https://vasselcreative.com/bespokewebsites.png",
        width: 1200,
        height: 630,
        alt: "Work showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Work() {
  return (
    <>
      <main>
        <section aria-label="Work Hero">
          <WorkHero />
        </section>

        <section aria-label="Work Showcase">
          <WorkSection />
        </section>

        <section aria-label="Data Table">
          <TableSection />
        </section>

        <section aria-label="Reviews">
          <ReviewSection />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
