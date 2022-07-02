import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import {
  IoMenu,
  IoLogInOutline,
  IoPerson,
} from "react-icons/io5";
import Navigation from "../../components/Header/Navigation/Navigation";
import { useState } from "react";
import SearchBar from "../../components/Header/SearchBar";
import Cart from "../../components/Header/Cart";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

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
              <a href="/" className={styles.logoLink}>
                <img src={logo} alt="My store" />
              </a>
            </div>
          </div>
          <div className={styles.searchWrapper}>
            <SearchBar />
            <div className={styles.userSection}>
              <div className={styles.login}>
                <a href="/login" className={styles.link}>
                  <span>Login</span>
                  <span className={styles.icon}>
                    <IoLogInOutline style={{ width: "24px", height: "24px" }}/>
                  </span>
                </a>
              </div>
              {/* TODO: condition for show login or profile */}
              {/* <div className={styles.profile}>
                <a href="/dashboard">
                  <IoPerson style={{ width: "24px", height: "24px" }}/>
                </a>
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
