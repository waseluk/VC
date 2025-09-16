import { tableData } from "@/app/data/tableData";
import ProjectTable from "@/app/components/table/table";
import styles from "@/app/components/table/table_section.module.css";

export default function TableSection() {
  return (
    <section className={styles.workFormat}>
      <div className={styles.workIntro}>
        <h3 className={styles.headerSection}>
          The average effort of projects I launched in 2024 was{" "}
          <span>100 hours</span>. My smallest engagement was 25 hours, and the
          highest was 200 hours.
        </h3>
      </div>
      <div className={styles.workIntro}>
        <h4 className={styles.headerSection}>
          Not sure how long your project will take?{" "}
          <a href="mailto:hello@vasselcreative.com?subject=Let’s%20Work%20Together&body=Hi%20Vassel%20Creative,">
            Let’s have a <span>consultation</span>.
          </a>
        </h4>
      </div>

      <div className={styles.workSection}>
        <ProjectTable data={tableData} />
      </div>
    </section>
  );
}
