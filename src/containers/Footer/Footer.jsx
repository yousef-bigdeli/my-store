import { NavLink } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const handleNewsFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <div className="appContainer">
        <div className={styles.content}>
          <div>
            <NavLink to="/">
              <img src={logo} alt="My store" />
            </NavLink>
            <div className={styles.contact}>
              <p>Phone </p>
              <span>+1850022002</span>
            </div>
            <div className={styles.contact}>
              <p>Email </p>
              <span>info@store.com</span>
            </div>
          </div>
          <Links />
          <div className={styles.newsEmail}>
            <h3>Let’s stay in touch</h3>
            <form className={styles.form} onSubmit={handleNewsFormSubmit}>
              <input type="email" placeholder="Your Email Address" />
              <button type="submit">
                <IoArrowForward />
              </button>
            </form>
            <p>Keep up to date with our latest news and special offers.</p>
          </div>
        </div>
      </div>
      <div className={styles.copy}>Copyright &copy; 2022</div>
    </footer>
  );
};

export default Footer;

const Links = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.column}>
        <p>About Us</p>
        <ul className={styles.list}>
          <li>
            <NavLink className={styles.footerLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="category">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="/">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.column}>
        <p>Get Help</p>
        <ul className={styles.list}>
          <li>
            <NavLink className={styles.footerLink} to="faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="/">
              Your Orders
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="/">
              Your Account
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="/">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.column}>
        <p>New Categories</p>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={styles.footerLink}
              to="category/electronic-devices"
            >
              Electronic
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="category/fashion">
              Fashion
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerLink} to="category/books">
              Books
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
