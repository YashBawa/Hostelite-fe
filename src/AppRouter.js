import { useRoutes } from "raviger";
import Home from "./Components/Home";
import Loginpg from "./Components/Loginpg";
import Signup from "./Components/Signup";

const route = {
  "/": () => <Home />,
  "/login": () => <Loginpg/>,
  "/signin" : () => <Signup/>
};

export default function AppRouter() {
  const routes = useRoutes(route);
  return <div> {routes}</div>;
}
