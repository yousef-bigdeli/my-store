import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
