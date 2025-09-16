import { workCards } from "@/app/data/siteData";
import WorkCard from "./workCard";
import styles from "@/app/components/work/work_section.module.css";

export default function WorkSection() {
  return (
    <section className={styles.workFormat}>
      <div className={styles.workIntro}>
        <h3 className={styles.subText}>
          I believe every business carries a <span>unique</span> spark. My
          mission is to shape that spark within the digital space, building{" "}
          <span>websites</span> to make your vision <span>shine.</span>
        </h3>
      </div>
      <div className={styles.workSection}>
        {workCards.map((card, index) => (
          <WorkCard
            key={index}
            image={card.image}
            cardDescription={card.cardDescription}
            cardYear={card.cardYear}
          />
        ))}
      </div>
    </section>
  );
}
