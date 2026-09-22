import { useContext } from "react";
import { NotificationContext } from "../context/";

function useNotification() {
  return useContext(NotificationContext);
}

export default useNotification;
