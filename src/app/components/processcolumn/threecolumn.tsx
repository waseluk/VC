import styles from "@/app/components/processcolumn/threecolumn.module.css";
import Nav from "@/app/components/processcolumn/columnnav";
import ReviewSectionAlt from "../reviews/reviewSectionAlt";

export default function ThreeColumnLayout() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Nav />
      </aside>

      <main className={styles.main}>
        <section id="chat" className={styles.section}>
          <h3>Chat and Review</h3>
          <p className={styles.paragraph}>
            I will ask you lots of questions around you and your brand. Learning
            more about you and what you do.
          </p>
          <p className={styles.paragraph}>
            At this stage lets take a look at what you have already. Putting
            together an audit of your existing site will help us to identify
            gaps <span>together</span> and put a plan of action in place.
          </p>
        </section>

        <section id="design" className={styles.section}>
          <h4>Design & Development</h4>
          <p className={styles.subText}>
            My goal is to be as <span>transparent</span> as possible, using the
            latest languages and frameworks I will <span>communicate</span>{" "}
            recommended changes to help you to understand more about the web as
            we collaborate.
          </p>
          <p className={styles.subText}>
            I work on a time and materials basis. I’ve found this to be a{" "}
            <span>flexible</span> and transparent pricing <span>structure</span>{" "}
            for everyone.
          </p>{" "}
          <p className={styles.subText}>
            I charge £100/hr for the first ten hours of any project, then £80/hr
            after that.
          </p>
        </section>

        <section id="aftercare" className={styles.section}>
          <h5>Aftercare</h5>
          <p className={styles.subText}>
            When we have launched, <span>aftercare</span> and communication is
            just as important to ensure your new site remains <span>fresh</span>
            . No being left out to dry.
          </p>
          <p className={styles.subText}>
            We can agree <span>personal</span> working arrangements that are
            ideal for you.
          </p>{" "}
        </section>
      </main>

      <div className={styles.rightColumn}>
        <div className={styles.section}>
          <ReviewSectionAlt />
        </div>
      </div>
    </div>
  );
}
