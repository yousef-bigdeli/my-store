import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/Header/Navigation/Navigation";
import SearchBar from "../../components/Header/SearchBar";
import Cart from "../../components/Header/Cart";

import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { IoMenu, IoLogInOutline, IoPerson } from "react-icons/io5";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false); // show categories list on desktop menu & toggle menu on mobile

  const showMenuHandler = () => {
    setIsShowMenu((prevState) => !prevState);
  };

  return (
    <header style={{ borderBottom: "2px solid #f0f0f1" }}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <div className={styles.burgerMenu} onClick={showMenuHandler}>
              <IoMenu />
            </div>
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
          <Navigation isShow={isShowMenu} showMenuHandler={showMenuHandler} />
        </div>
      </div>
    </header>
  );
};

export default Header;
