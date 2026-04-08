import styles from "./Notification.module.css";
import NotificationItem from "./NotificationItem";

function NotificationContainer({ notifications }) {
  return (
    <div className={styles.container}>
      {notifications.map((n) => (
        <NotificationItem key={n.id} {...n} />
      ))}
    </div>
  );
}

export default NotificationContainer;
