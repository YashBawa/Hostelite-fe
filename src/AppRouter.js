import { useRoutes } from "raviger";
import Loginpg from "./Components/Loginpg";
<<<<<<< HEAD
import Signup from "./Components/Signup";

const route = {
  "/": () => <Home />,
  "/login": () => <Loginpg/>,
  "/signin" : () => <Signup/>
=======
import Home from "./Components/Home";
import HomePage from "./Components/HomePage";

const route = {
  "/": () => <Home />,
  "/login": () => <Loginpg />,
  "/home": () => <HomePage />,
>>>>>>> 99f0e898b9409ceaf09d9e0b47213b7a0536f449
};

export default function AppRouter() {
  const routes = useRoutes(route);
  return <div> {routes}</div>;
}
