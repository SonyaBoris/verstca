import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Check from "./Check";
import Navigation from "./Navigation";


const Layout = () => {
  return (
    <>
       <Sidebar />
      <section className="app__content">
        <Header />
        <div className="container">
          <Check />
          <div className="page__container">
            <Navigation />
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default Layout;