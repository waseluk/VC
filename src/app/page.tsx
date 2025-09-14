import Designer from "./components/designer/designer";
import FooterSection from "./components/footer/footer";
import Hero from "./components/hero/hero";
import ReviewSection from "./components/reviews/reviewSection";
import WorkSection from "./components/work/workSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <ReviewSection />
        <WorkSection />
        <Designer />
        <FooterSection />
      </main>
    </div>
  );
}
