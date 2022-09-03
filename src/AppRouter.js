import { useRoutes } from "raviger";
import Loginpg from "./Components/Loginpg";
import Home from "./Components/Home";
import HomePage from "./Components/HomePage";

const route = {
  "/": () => <Home />,
  "/login": () => <Loginpg />,
  "/home": () => <HomePage />,
};

export default function AppRouter() {
  const routes = useRoutes(route);
  return <div> {routes}</div>;
}
