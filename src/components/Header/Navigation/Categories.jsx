import { Fragment } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Categories.module.scss";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";

// TODO : Coming from backend
const categories = [
  { name: "Electronic", parent: "", category: "electronic-devices" },
  {
    name: "Laptop",
    parent: "electronic-devices",
    category: "laptop-notebook",
  },
  {
    name: "Apple",
    parent: "laptop-notebook",
    category: "laptop-notebook/apple",
  },
  {
    name: "Asus",
    parent: "laptop-notebook",
    category: "laptop-notebook/asus",
  },
  {
    name: "Phone",
    parent: "electronic-devices",
    category: "electronic-phone",
  },
  {
    name: "Apple",
    parent: "electronic-phone",
    category: "electronic-phone/apple",
  },
  {
    name: "Samsung",
    parent: "electronic-phone",
    category: "electronic-phone/samsung",
  },
  {
    name: "Xiaomi",
    parent: "electronic-phone",
    category: "electronic-phone/xiaomi",
  },
  {
    name: "Huawii",
    parent: "electronic-phone",
    category: "electronic-phone/huawii",
  },
  {
    name: "Headphone",
    parent: "electronic-devices",
    category: "electronic-headphone",
  },
  {
    name: "JBL",
    parent: "electronic-headphone",
    category: "electronic-headphone/jbl",
  },
  {
    name: "Sony",
    parent: "electronic-headphone",
    category: "electronic-headphone/sony",
  },
  {
    name: "Beats",
    parent: "electronic-headphone",
    category: "electronic-headphone/beats",
  },
  {
    name: "Jabra",
    parent: "electronic-headphone",
    category: "electronic-headphone/jabra",
  },
  {
    name: "Tablet",
    parent: "electronic-devices",
    category: "electronic-tablet",
  },
  { name: "Fashion", parent: "", category: "fashion" },
  { name: "Shirt", parent: "fashion", category: "fashion-shirt" },
  { name: "Men", parent: "fashion-shirt", category: "men-shirt" },
  { name: "Women", parent: "fashion-shirt", category: "women-shirt" },
  { name: "Pants", parent: "fashion", category: "fashion-pants" },
  { name: "Jeans", parent: "fashion-pants", category: "jeans-pants" },
  {
    name: "Cotton",
    parent: "fashion-pants",
    category: "cotton-pants",
  },
  {
    name: "Cloth ",
    parent: "fashion-pants",
    category: "cloth-pants",
  },
  { name: "Books", parent: "", category: "books" },
  { name: "Literature", parent: "books", category: "books-literature" },
  { name: "History", parent: "books", category: "books-history" },
];

const Categories = ({ type, showMenuHandler }) => {
  const [showAccordion, setShowAccordion] = useState([]);
  const basePath = "/category/";

  const showAccordionHandler = (item) => {
    // in the mobile toggle menu
    setShowAccordion((prevState) =>
      prevState.find((cat) => cat === item.category)
        ? prevState.filter((cat) => cat !== item.category)
        : [...prevState, item.category]
    );
  };

  const getMobileCategoriesList = (parentPath = "") => {
    // at Mobile toggle menu
    return categories.map((rootItem) => {
      const hasChild = categories.some(
        ({ parent }) => parent === rootItem.category
      );

      const isShow = showAccordion.find(
        (category) => category === rootItem.category
      );

      return (
        <ul className={styles.categoriesMobile} key={rootItem.category}>
          {rootItem.parent === parentPath && (
            <li className={`${!hasChild && styles.subList}`}>
              {hasChild ? (
                <div
                  className={`${styles.categoryName} ${
                    isShow && styles.active
                  }`}
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
                <NavLink
                  to={`${basePath}${rootItem.category}`}
                  className={`${styles.categoryName} ${
                    isShow && styles.active
                  }`}
                >
                  {rootItem.name}
                </NavLink>
              )}

              {hasChild && isShow && (
                <>
                  <div className={styles.categoriesList__link}>
                    <NavLink to={`${basePath}${rootItem.category}`}>
                      <span>See All</span>
                      <IoIosArrowForward />
                    </NavLink>
                  </div>
                  {getMobileCategoriesList(rootItem.category)}
                </>
              )}
            </li>
          )}
        </ul>
      );
    });
  };

  const getDesktopCategoriesList = (parentPath = "") => {
    return (
      <div className={`${styles.categoriesDesktop}`}>
              <div className={styles.wrapper}>
                {categories.map(
                  (item) =>
                    item.parent === parentPath && (
                      <ul className={styles.categoryList} key={item.category}>
                        <li className={styles.title}>
                          <span>{item.name}</span>
                          <i>
                            <IoIosArrowDown />
                          </i>
                          <div className={styles.content}>
                            <NavLink
                              to={`${basePath}${item.category}`}
                              className={styles.groupLink}
                            >
                              See All {item.name} <IoIosArrowForward />
                            </NavLink>
                            <div className={styles.categoryList__groups}>
                              {categories.map(
                                (itemLevel2) =>
                                  itemLevel2.parent === item.category && (
                                    <Fragment key={itemLevel2.category}>
                                      <NavLink
                                        to={`${basePath}${itemLevel2.category} `}
                                        className={styles.group__title}
                                        key={itemLevel2.category}
                                      >
                                        {itemLevel2.name}
                                        <IoIosArrowForward />
                                      </NavLink>

                                      {categories.map(
                                        (itemLevel3) =>
                                          itemLevel3.parent ===
                                            itemLevel2.category && (
                                            <NavLink
                                              to={`${basePath}${itemLevel3.category}`}
                                              className={styles.group__item}
                                              key={itemLevel3.category}
                                            >
                                              {itemLevel3.name}
                                            </NavLink>
                                          )
                                      )}
                                    </Fragment>
                                  )
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    )
                )}
              </div>
            </div>
    );
  };

  return type === "mobile"
    ? getMobileCategoriesList()
    : getDesktopCategoriesList();
};

export default Categories;
