import Footer from "@/app/components/footer/footer";
import styles from "@/app/process/page.module.css";
import ThreeColumnLayout from "@/app/components/processcolumn/threecolumn";
import ProcessHero from "@/app/components/processpagehero/processhero";

export default function Process() {
  return (
    <main className={styles.mainSection}>
      <section className={styles.section}>
        <ProcessHero />
      </section>

      <section className={styles.section}>
        <ThreeColumnLayout />
      </section>

      <section className={styles.section}>
        <Footer />
      </section>
    </main>
  );
}
