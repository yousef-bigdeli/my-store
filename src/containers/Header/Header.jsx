import { Link } from "react-router-dom";

import Navigation from "../../components/Header/Navigation/Navigation";
import SearchBar from "../../components/Header/SearchBar";
import Cart from "../../components/Header/Cart";

import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { IoLogInOutline, IoPerson } from "react-icons/io5";

const Header = () => {
  return (
    <header style={{ borderBottom: "2px solid #f0f0f1" }}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <div>
              <Link to="/" className={styles.logoLink}>
                <img src={logo} alt="My store" />
              </Link>
            </div>
          </div>

          <div className={styles.searchWrapper}>
            <SearchBar />
            <div className={styles.userSection}>
              <div className={styles.login}>
                <Link to="/login" className={styles.link}>
                  <span>Login</span>
                  <span className={styles.icon}>
                    <IoLogInOutline style={{ width: "24px", height: "24px" }} />
                  </span>
                </Link>
              </div>
              {/* TODO: condition for show login or profile */}
              {/* <div className={styles.profile}>
                <Link to="/dashboard">
                  <IoPerson style={{ width: "24px", height: "24px" }}/>
                </Link>
              </div> */}
              <span className={styles.sepreate}></span>
              <Cart />
            </div>
          </div>
        </div>

        <div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
