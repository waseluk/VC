import Image from "next/image";
import styles from "@/app/components/designer/designer.module.css";

export default function FrameworkLogos() {
  return (
    <div className={styles.frameworkWrapper}>
      <ul>
        <li>
          <Image
            src="/images/react.svg"
            alt="React Logo"
            width={70}
            height={70}
            className={styles.frameworkLogo}
          />
        </li>

        <li>
          <Image
            src="/images/nextjs.svg"
            alt="Next.js Logo"
            width={70}
            height={70}
            className={styles.frameworkLogo}
          />
        </li>

        <li>
          <Image
            src="/images/figma.svg"
            alt="Figma Logo"
            width={70}
            height={70}
            className={styles.frameworkLogo}
          />
        </li>
        <li>
          <Image
            src="/images/typescript.svg"
            alt="Figma Logo"
            width={70}
            height={70}
            className={styles.frameworkLogo}
          />
        </li>
      </ul>
    </div>
  );
}
