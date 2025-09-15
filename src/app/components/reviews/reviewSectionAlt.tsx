import { reviewData } from "@/app/data/siteData";
import ReviewCard from "@/app/components/reviews/reviewCard";
import styles from "@/app/components/reviews/review_section.module.css";

export default function ReviewSection() {
  return (
    <section className={styles.workSectionAlt}>
      {reviewData.slice(0, 2).map((card, index) => (
        <ReviewCard
          key={index}
          image={card.image}
          cardReview={card.cardReview}
          cardAuthor={card.cardAuthor}
          cardCompany={card.cardCompany}
        />
      ))}
    </section>
  );
}
