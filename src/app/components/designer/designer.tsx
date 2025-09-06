import Image from "next/image";
import styles from "@/app/components/designer/designer.module.css";
import FrameworkLogos from "@/app/components/designer/frameworks";

export default function Designer() {
  return (
    <section className={styles.designerSection}>
      <div className={styles.textContent}>
        <h3 className={styles.tagline}>Not your average designer.</h3>

        <p className={styles.paragraph}>
          With a background in the creative arts, <br />
          creativity is communication.
        </p>

        <p className={styles.paragraph}>
          No templates. Your brand started from <br />
          scratch, so will I.
        </p>

        <p className={styles.subText}>
          Transparency and communication are everything to me. <br />
          Find more about how we can work together to make your brand stand out.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/vassel_logo.svg"
          alt="Designer portrait"
          width={300}
          height={380}
          className={styles.profileImage}
        />
      </div>
      <FrameworkLogos />
    </section>
  );
}
