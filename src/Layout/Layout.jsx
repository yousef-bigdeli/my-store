import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-4 pb-20 md:pt-30">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
