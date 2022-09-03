import { useRoutes } from "raviger";
import Loginpg from "./Components/Loginpg";
import Home from "./Components/Home";
import HomePage from "./Components/HomePage";
import HealthReport from "./Components/HealthReport";
import RoomCleaning from "./Components/RoomCleaning";
import LeaveRequest from "./Components/LeaveRequest";
import Complaint from "./Components/Complaint";
import Chatbot from "./Components/Chatbot";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile";

const route = {
  "/": () => <Home />,
  "/login": () => <Loginpg />,
  "/home": () => <HomePage />,
  "/health": () => <HealthReport />,
  "/clean": () => <RoomCleaning />,
  "/leave": () => <LeaveRequest />,
  "/complaint": () => <Complaint />,
  "/chatbot": () => <Chatbot />,
  "/notification": () => <Notification />,
  "/profile": () => <Profile />,
};

export default function AppRouter() {
  const routes = useRoutes(route);
  return <div> {routes}</div>;
}
