import styles from "./Navigation.module.scss";
import logo from "../../assets/images/logo.png";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import { useState } from "react";

const menuItems = [
  { title: "Home", to: "/home" },
  { title: "Shop", to: "/shop" },
  { title: "Best Sellers", to: "/best-sellers" },
  { title: "Offers", to: "/offers" },
  { title: "FAQ", to: "/faq" },
];

// TODO : Coming from backend
const categories = [
  { name: "Electronic", parent: "/", category: "/electronic" },
  { name: "Laptop", parent: "/electronic", category: "/electronic/laptop" },
  {
    name: "Apple",
    parent: "/electronic/laptop",
    category: "/electronic/laptop/apple",
  },
  {
    name: "Asus",
    parent: "/electronic/laptop",
    category: "/electronic/laptop/asus",
  },
  { name: "Phone", parent: "/electronic", category: "/electronic/phone" },
  {
    name: "Apple",
    parent: "/electronic/phone",
    category: "/electronic/phone/apple",
  },
  {
    name: "Samsung",
    parent: "/electronic/phone",
    category: "/electronic/phone/samsung",
  },
  { name: "Fashion", parent: "/", category: "/fashion" },
  { name: "Shirt", parent: "/fashion", category: "/fashion/shirt" },
  { name: "Pants", parent: "/fashion", category: "/fashion/pants" },
  { name: "Books", parent: "/", category: "/books" },
  { name: "Literature", parent: "/books", category: "/books/literature" },
  { name: "History", parent: "/books", category: "/books/history" },
];

const Navigation = ({ isShow = false, showMenuHandler }) => {
  const [showAccordion, setShowAccordion] = useState([]);

  const showAccordionHandler = (item) => {
    setShowAccordion((prevState) =>
      prevState.find((cat) => cat === item.category)
        ? prevState.filter((cat) => cat !== item.category)
        : [...prevState, item.category]
    );
  };

  const getMobileCategoriesList = (categoriesArr, parentPath = "/") => {
    // at Mobile toggle menu
    return categoriesArr.map((rootItem) => {
      const hasChild = categoriesArr.some(
        ({ parent }) => parent === rootItem.category
      );

      const isShow = showAccordion.find(
        (category) => category === rootItem.category
      );

      return (
        rootItem.parent === parentPath && (
          <li
            key={rootItem.category}
            className={`${!hasChild && styles.subList}`}
          >
            {hasChild ? (
              <div
                className={`${styles.categoryName} ${isShow && styles.active}`}
                onClick={() => showAccordionHandler(rootItem)}
              >
                <span
                  style={{ flex: 1 }}
                  className={`${isShow && styles.active}`}
                >
                  {rootItem.name}
                </span>

                <i>{isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}</i>
              </div>
            ) : (
              // TODO: Replace <a> with React router Link
              <a
                href={`${rootItem.category}`}
                className={`${styles.categoryName} ${isShow && styles.active}`}
              >
                {rootItem.name}
              </a>
            )}

            {hasChild && isShow && (
              <>
                <div className={styles.categoriesList__link}>
                  <a href={`${rootItem.category}`}>
                    <span>All of category</span>
                    <IoIosArrowForward />
                  </a>
                </div>
                <ul>
                  {getMobileCategoriesList(categories, rootItem.category)}
                </ul>
              </>
            )}
          </li>
        )
      );
    });
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
          <nav className={styles.navList}>
            <ul>
              {menuItems.map((item) => (
                <li key={item.to} className={styles.navList__item}>
                  {/* TODO: Change link with react router */}
                  <a href={item.to}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.categoriesWrapper}>
            <p>All Categories</p>
            <ul className={styles.categoriesList}>
              {getMobileCategoriesList(categories)}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className={styles.desktopMenu}></div>
    </>
  );
};

export default Navigation;
