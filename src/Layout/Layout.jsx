import Header from "../containers/Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
