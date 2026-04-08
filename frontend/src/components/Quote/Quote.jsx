import Section from "../Section/Section";
import styles from "./Quote.module.css";
import picture from "../../assets/alex_morgan.png";

function Quote() {
  return (
    <Section className={styles.quoteSection}>
      <div className={styles.bgText}>CREATE</div>

      <div className={styles.quoteContent}>
        <span className={styles.quoteIcon}>“</span>

        <h2>
          "Good design is obvious. Great design is transparent. But exceptional
          design leaves a mark on the soul."
        </h2>

        <div className={styles.author}>
          <img src={picture} alt="Alex Morgan" />
          <div>
            <strong>Farel Design</strong>
            <p>Founder, Rel.Design</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Quote;
