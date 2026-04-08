import styles from "./Notification.module.css";

function NotificationItem({ type, message }) {
  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
}

export default NotificationItem;
