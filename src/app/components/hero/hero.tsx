import styles from "@/app/components/hero/hero.module.css";

export default function Hero() {
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
          B<span>e</span>spoke Websites <br />
          for private clients.
        </h1>
        <h2 className={styles.vasselHeroSubheaderText}>
          Tom is an independent designer working with best Web practices to
          develop beautiful sites.
        </h2>
      </div>

      <div className={styles.vasselHeroWatermark}>
        VASSEL <br />
        Creative
      </div>
    </section>
  );
}
