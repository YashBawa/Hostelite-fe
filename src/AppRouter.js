import { useRoutes } from "raviger";
import Home from "./Components/Home";
import Loginpg from "./Components/Loginpg";

const route = {
  "/": () => <Home />,
  "/login": () => <Loginpg/>
};

export default function AppRouter() {
  const routes = useRoutes(route);
  return <div> {routes}</div>;
}
