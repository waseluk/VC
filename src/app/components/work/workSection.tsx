import { workCards } from "@/app/data/siteData";
import WorkCard from "./workCard";
import styles from "@/app/components/work/work_section.module.css";

export default function WorkSection() {
  return (
    <section className={styles.workFormat}>
      <div className={styles.workIntro}>
        <h3>
          A tenure within ecommerce, every business has a unique flair. Our
          mission is to showcase it to the world. Whether through a beautifully
          crafted website or a marketing campaign that resonates, we are here to
          be a vessel for your story, transforming your vision into something
          exceptional.
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
