import styles from "./Section.module.css";

function Section({ id, ref, children, variant = "default", className }) {
  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

export default Section;
