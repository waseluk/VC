import Image from "next/image";
import styles from "@/app/components/reviews/review_card.module.css";

interface ReviewCardProps {
  image: string;
  cardReview: string;
  cardAuthor: string;
  cardCompany: string;
}

export default function ReviewCard({
  image,
  cardReview,
  cardAuthor,
  cardCompany,
}: ReviewCardProps) {
  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardReview}>{cardReview}</p>

      <div className={styles.cardFooter}>
        <div className={styles.cardImage}>
          <Image
            src={image}
            alt={cardAuthor}
            width={48}
            height={48}
            className={styles.avatar}
          />
        </div>
        <div className={styles.cardAuthorInfo}>
          <p className={styles.cardAuthor}>{cardAuthor}</p>
          <p className={styles.cardCompany}>{cardCompany}</p>
        </div>
      </div>
    </div>
  );
}
