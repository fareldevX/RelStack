import NotificationItem from "./notification-item";

function NotificationContainer({ notifications }) {
  return (
    <div className="fixed bottom-6 right-6 z-9999 flex flex-col gap-3">
      {notifications.map((n) => (
        <NotificationItem key={n.id} {...n} />
      ))}
    </div>
  );
}

export default NotificationContainer;
