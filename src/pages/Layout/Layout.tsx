import { Outlet } from "react-router";
import { NavigationBar } from "../../components";

export const Layout = () => (
  <>
    <main>
      <Outlet />
    </main>
    <NavigationBar />
  </>
);
