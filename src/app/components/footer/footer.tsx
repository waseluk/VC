import styles from "@/app/components/footer/footer.module.css";

export default function FooterSection() {
  return (
    <section className={styles.vasselFooterSection}>
      <div className={styles.vasselFooterContent}>
        <div className={styles.vasselFooterHeaderText}>
          If you have a project that you’d like to discuss,
          <span>get in touch</span> to get the ball rolling.
        </div>
        <div className={styles.vasselFooterSubheaderText}>
          <p>Social media free since 2023 drop me an email: </p>
          <p>
            <a href="mailto:hello@vasselcreative.com?subject=Let’s%20Work%20Together&body=Hi%20Vassel%20Creative,">
              <span>hello@vasselcreative.com</span>
            </a>
          </p>
        </div>
      </div>

      <div className={styles.vasselFooterWatermark}>
        VASSEL <br />
        Creative
      </div>

      <div className={styles.vasselFooterStripes}>
        <div
          className={`${styles.vasselFooterStripe} ${styles.vasselFooterLight}`}
        />
        <div
          className={`${styles.vasselFooterStripe} ${styles.vasselFooterDark}`}
        />
      </div>
    </section>
  );
}
