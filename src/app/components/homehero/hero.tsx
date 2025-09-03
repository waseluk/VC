import styles from "@/app/components/homehero/hero.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.stripes}>
        <div className={`${styles.stripe} ${styles.light}`} />
        <div className={`${styles.stripe} ${styles.dark}`} />
      </div>

      <div className={styles.text}>
        B<span>e</span>spoke Websites <br />
        for private clients.
      </div>

      <div className={styles.watermark}>
        VASSEL <br />
        Creative
      </div>
    </section>
  );
}
