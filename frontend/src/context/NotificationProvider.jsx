import { useState, useCallback } from "react";
import { NotificationContext } from "./NotificationContext";
import NotificationContainer from "../components/Notification/NotificationContainer";

function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const notify = useCallback(({ type = "info", message, duration = 3000 }) => {
    const id = Date.now();

    setNotifications((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <NotificationContainer notifications={notifications} />
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
