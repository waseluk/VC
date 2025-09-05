import HeroSection from "./components/homehero/hero";
import ReviewSection from "./components/reviews/reviewSection";
import WorkSection from "./components/work/workSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <ReviewSection />
        <WorkSection />
      </main>
    </div>
  );
}
