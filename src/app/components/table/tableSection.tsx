import { tableData } from "@/app/data/tableData";
import ProjectTable from "@/app/components/table/table";
import styles from "@/app/components/table/table_section.module.css";

export default function TableSection() {
  return (
    <section className={styles.workFormat}>
      <div className={styles.workIntro}>
        <h3>
          The average effort of projects I launched in 2024 was 130 hours. My
          smallest engagement was 25 hours, and the hig hest was 420 hours.
        </h3>
      </div>
      <div className={styles.workIntro}>
        <h4>
          Not sure how long your project will take?{" "}
          <a>Let’s have a consultation.</a>
        </h4>
      </div>

      <div className={styles.workSection}>
        <ProjectTable data={tableData} />
      </div>
    </section>
  );
}
