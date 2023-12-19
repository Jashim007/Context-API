import Header from "./Header";
import { Outlet } from "react-router-dom";
import Title from "./Title";

const Layout = () => {
  return (
    <>
      <Title />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
