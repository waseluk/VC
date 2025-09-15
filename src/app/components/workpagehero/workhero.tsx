import styles from "@/app/components/workpagehero/workhero.module.css";
export default function WorkHero() {
  return (
    <section className={styles.vasselHeroSection}>
      <div className={styles.vasselHeroStripes}>
        <div
          className={`${styles.vasselHeroStripe} ${styles.vasselHeroLight}`}
        />
        <div
          className={`${styles.vasselHeroStripe} ${styles.vasselHeroDark}`}
        />
      </div>

      <div className={styles.vasselHeroContent}>
        <h1 className={styles.vasselHeroHeaderText}>
          Work <br />
        </h1>
        <h2 className={styles.vasselHeroSubheaderText}>
          Since 2024, I’ve had the privilege of collaborating with professionals
          from diverse industries, bringing ideas to life.
        </h2>
      </div>

      <div className={styles.vasselHeroWatermark}>
        VASSEL <br />
        Creative
      </div>
    </section>
  );
}
