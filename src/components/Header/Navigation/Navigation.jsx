import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Categories from "./Categories";

import styles from "./Navigation.module.scss";
import logo from "../../../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";

const menuItems = [
  { title: "Best Selling", to: "/best-selling" },
  { title: "Offers", to: "/offer" },
  { title: "FAQ", to: "/faq" },
];

const Navigation = ({ isShow = false, showMenuHandler }) => {
  const [menuHoverStyles, setMenuHoverStyles] = useState({ maxWidth: 0 });

  const getMenuList = (items) => {
    return (
      <ul className={styles.navList}>
        {items.map((item) => (
          <li
            key={item.to}
            className={`${styles.navList__item} `}
            data-id="nav-item"
          >
            {/* TODO: Change link with react router */}
            <NavLink to={item.to}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    );
  };

  const handleNavMouseOver = (e, type) => {
    // for menu items in desktop navigation
    const target = e.target.parentElement;
    const id = target.dataset.id;
    const { width, height, left, top } = target.getBoundingClientRect();
    const style = {
      maxWidth: width,
      left,
      top: top + height,
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

  return (
    <>
      {/* Mobile toggle menu */}
      <div className={styles.mobileMenu}>
        <div
          className={`${styles.cover} ${isShow ? styles.show : ""}`}
          onClick={showMenuHandler}
        ></div>
        <div
          className={`${styles.mobileMenu__content} ${
            isShow ? styles.show : ""
          }`}
        >
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="My store" className=" lskdjf" />
            </a>
          </div>
          {getMenuList(menuItems)}
          <div className={styles.categoriesWrapper}>
            <p>All Categories</p>
            <Categories type="mobile" />
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <nav
        className={styles.desktopMenu}
        onMouseOver={(e) => handleNavMouseOver(e, "show")}
        onMouseLeave={(e) => handleNavMouseOver(e, "hide")}
      >
        <div data-id="nav-category" className={`${styles.categories}`}>
          <IoMenu />
          <p>All categories</p>
          <div className={styles.categories__wrapper}>
            <Categories type="desktop" />
          </div>
        </div>
        {getMenuList(menuItems)}
        <span className={styles.hoverEffect} style={menuHoverStyles}></span>
      </nav>
    </>
  );
};

export default Navigation;
