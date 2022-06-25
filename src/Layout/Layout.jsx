import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
