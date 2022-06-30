import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
import Navigation from "../../components/Header/Navigation";
import { useState } from "react";

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
          <div className={styles.userSection}>
            <div>
              {/* TODO: Create SearchBar component */}
              Search
            </div>
            <div>
              <div className={styles.cartWrapper}>
                {/* TODO: Create Cart component */}
                cart
              </div>
              <div className={styles.userInfo}></div>
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
