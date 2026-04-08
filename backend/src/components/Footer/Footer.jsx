import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <div className={styles.copyRight}>
          <span>© 2026 Rel.Design. All rights reserved.</span>
        </div>
        <div className={styles.info}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
