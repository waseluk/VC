import styles from "@/app/components/processpagehero/processhero.module.css";
export default function ProcessHero() {
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
          My Process <br />
        </h1>
        <h2 className={styles.vasselHeroSubheaderText}>
          All of my initial consultations are <span>free</span>. Lets just have
          a <span>chat</span>.
        </h2>
      </div>

      <div className={styles.vasselHeroWatermark}>
        VASSEL <br />
        Creative
      </div>
    </section>
  );
}
