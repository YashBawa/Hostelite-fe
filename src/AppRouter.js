import { useRoutes } from "raviger";
import Home from "./Components/Home";

const route = {
  "/": () => <Home />,
};

export default function AppRouter() {
  const routes = useRoutes(route);
  return <div> {routes}</div>;
}
