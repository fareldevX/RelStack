import { BrowserRouter } from "react-router-dom";
import NotificationProvider from "../../context/notification-provider";

function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <NotificationProvider>{children}</NotificationProvider>
    </BrowserRouter>
  );
}

export default AppProviders;
