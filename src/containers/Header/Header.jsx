import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <div className={styles.burgerMenu}>
            {/* TODO: Toggle menu */}
            <IoMenu />
          </div>
          <div>
            <a href="/">
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
      {/* TODO: Create Navigation component */}
    </header>
  );
};

export default Header;
