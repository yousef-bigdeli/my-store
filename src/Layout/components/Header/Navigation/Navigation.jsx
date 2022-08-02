import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Categories from "./Categories";
// styles
import styles from "./Navigation.module.scss";
// assets
import logo from "assets/images/logo.png";
import { IoMenu } from "react-icons/io5";

const menuItems = [
  { title: "Best Selling", to: "/best-selling" },
  { title: "Offers", to: "/offer" },
  { title: "FAQ", to: "/faq" },
];

const Navigation = () => {
  const [menuHoverStyles, setMenuHoverStyles] = useState({ maxWidth: 0 });
  const [isShowMenu, setIsShowMenu] = useState(false); // show categories list on desktop menu & toggle menu on mobile
  const [navbarVisibleScroll, _setNavbarVisibleOnScroll] = useState({
    prevPageOffset: window.pageYOffset,
    visible: true,
  });
  const prevPageOffsetRef = useRef(navbarVisibleScroll.prevPageOffset);

  const handleShowMenu = (value) => {
    setIsShowMenu(value);
  };

  const getMenuList = (items) => {
    return (
      <ul className={styles.navList}>
        {items.map((item) => (
          <li
            key={item.to}
            className={`${styles.navList__item} `}
            data-id="nav-item"
          >
            <NavLink to={item.to} onClick={() => handleShowMenu(false)}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  const handleNavMouseOver = (e, type) => {
    // for menu items in desktop navigation
    const target = e.target.parentElement;
    const id = target.dataset.id;
    const { width, left } = target.getBoundingClientRect();
    const style = {
      maxWidth: width,
      left,
    };

    if (type === "show") {
      if (id === "nav-item" || id === "nav-category") {
        menuHoverStyles.maxWidth === 0
          ? setMenuHoverStyles(style)
          : setMenuHoverStyles({ ...style, transition: "all .3s" });
      }
    } else {
      setMenuHoverStyles((prevstete) => ({ ...prevstete, maxWidth: 0 }));
    }
  };

  // The event listener doesn't have access to states. use Ref and another setState for handle state on the event handler function
  const setNavbarVisibleOnScroll = (val) => {
    prevPageOffsetRef.current = val.prevPageOffset;
    _setNavbarVisibleOnScroll(val);
  };

  const showNavigationHandler = () => {
    const prevPageOffset = prevPageOffsetRef.current;
    const currentPageOffset = window.pageYOffset;
    const visible = prevPageOffset > currentPageOffset;
    setNavbarVisibleOnScroll({ prevPageOffset: currentPageOffset, visible });
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavigationHandler);
    return () => window.removeEventListener("scroll", showNavigationHandler);
  }, []);

  return (
    <>
      {/* Mobile toggle menu */}

      <div className={styles.mobileMenu}>
        <div className={styles.burgerMenu} onClick={() => handleShowMenu(true)}>
          <IoMenu />
        </div>
        <div
          className={`${styles.cover} ${isShowMenu ? styles.show : ""}`}
          onClick={() => handleShowMenu(false)}
        ></div>
        <div
          className={`${styles.mobileMenu__content} ${
            isShowMenu ? styles.show : ""
          }`}
        >
          <div className={styles.logo}>
            <NavLink to="/" onClick={() => handleShowMenu(false)}>
              <img src={logo} alt="My store" className=" lskdjf" />
            </NavLink>
          </div>
          {getMenuList(menuItems)}
          <div className={styles.categoriesWrapper}>
            <p>All Categories</p>
            <Categories type="mobile" handleShowMenu={handleShowMenu} />
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <nav
        className={`${styles.desktopMenu} ${
          navbarVisibleScroll.visible ? styles.show : ""
        }`}
        onMouseOver={(e) => handleNavMouseOver(e, "show")}
        onMouseLeave={(e) => handleNavMouseOver(e, "hide")}
      >
        <div className={styles.menuWrapper}>
          <div
            data-id="nav-category"
            className={`${styles.categories}`}
            onMouseEnter={() => handleShowMenu(true)}
            onMouseLeave={() => handleShowMenu(false)}
          >
            <IoMenu />
            <p>All categories</p>
            <div
              className={`${styles.categories__wrapper} ${
                isShowMenu ? styles.show : ""
              }`}
            >
              <Categories type="desktop" handleShowMenu={handleShowMenu} />
            </div>
          </div>
          {getMenuList(menuItems)}
        </div>
      </nav>
      <span className={styles.hoverEffect} style={menuHoverStyles}></span>
    </>
  );
};

export default Navigation;
