import Image from "next/image";
import styles from "@/app/components/work/work_card.module.css";

interface WorkCardProps {
  image: string;
  cardDescription: string;
  cardYear: number;
}

export default function WorkCard({
  image,
  cardDescription,
  cardYear,
}: WorkCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <Image src={image} alt={cardDescription} width={300} height={200} />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardDescription}>
          <p>{cardDescription}</p>
        </div>
        <div className={styles.cardYear}>
          <p>{cardYear}</p>
        </div>
      </div>
    </div>
  );
}
