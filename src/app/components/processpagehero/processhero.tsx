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
        <div className={styles.vasselHeroHeaderText}>
          My Process <br />
        </div>
        <div className={styles.vasselHeroSubheaderText}>
          All of my initial consultations are <span>free</span>. Forget ‘hard
          selling’, lets just have a <span>chat</span>.
        </div>
      </div>

      <div className={styles.vasselHeroWatermark}>
        VASSEL <br />
        Creative
      </div>
    </section>
  );
}
