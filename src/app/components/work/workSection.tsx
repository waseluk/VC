import { workCards } from "@/app/data/workData";
import WorkCard from "./workCard";
import styles from "@/app/components/work/work_section.module.css";

export default function WorkSection() {
  return (
    <section className={styles.workSection}>
      {workCards.map((card, index) => (
        <WorkCard
          key={index}
          image={card.image}
          cardDescription={card.cardDescription}
          cardYear={card.cardYear}
        />
      ))}
    </section>
  );
}
