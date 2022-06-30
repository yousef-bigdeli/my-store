import { Fragment } from "react";
import { useState } from "react";
import styles from "./Categories.module.scss";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";

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
  {
    name: "Xiaomi",
    parent: "/electronic/phone",
    category: "/electronic/phone/xiaomi",
  },
  {
    name: "Huawii",
    parent: "/electronic/phone",
    category: "/electronic/phone/huawii",
  },
  {
    name: "Headphone",
    parent: "/electronic",
    category: "/electronic/headphone",
  },
  {
    name: "JBL",
    parent: "/electronic/headphone",
    category: "/electronic/headphone/jbl",
  },
  {
    name: "Sony",
    parent: "/electronic/headphone",
    category: "/electronic/headphone/sony",
  },
  {
    name: "Beats",
    parent: "/electronic/headphone",
    category: "/electronic/headphone/beats",
  },
  {
    name: "Jabra",
    parent: "/electronic/headphone",
    category: "/electronic/headphone/jabra",
  },
  { name: "Tablet", parent: "/electronic", category: "/electronic/tablet" },
  { name: "Fashion", parent: "/", category: "/fashion" },
  { name: "Shirt", parent: "/fashion", category: "/fashion/shirt" },
  { name: "Men", parent: "/fashion/shirt", category: "/fashion/shirt/men" },
  { name: "Women", parent: "/fashion/shirt", category: "/fashion/shirt/women" },
  { name: "Pants", parent: "/fashion", category: "/fashion/pants" },
  { name: "Jeans", parent: "/fashion/pants", category: "/fashion/pants/jeans" },
  {
    name: "Cotton",
    parent: "/fashion/pants",
    category: "/fashion/pants/cotton",
  },
  {
    name: "Cloth ",
    parent: "/fashion/pants",
    category: "/fashion/pants/cloth",
  },
  { name: "Books", parent: "/", category: "/books" },
  { name: "Literature", parent: "/books", category: "/books/literature" },
  { name: "History", parent: "/books", category: "/books/history" },
];

const Categories = ({ type }) => {
  const [showAccordion, setShowAccordion] = useState([]);

  const showAccordionHandler = (item) => {
    // in the mobile toggle menu
    setShowAccordion((prevState) =>
      prevState.find((cat) => cat === item.category)
        ? prevState.filter((cat) => cat !== item.category)
        : [...prevState, item.category]
    );
  };

  const getMobileCategoriesList = (parentPath = "/") => {
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
                // TODO: Replace <a> with React router Link
                <a
                  href={`${rootItem.category}`}
                  className={`${styles.categoryName} ${
                    isShow && styles.active
                  }`}
                >
                  {rootItem.name}
                </a>
              )}

              {hasChild && isShow && (
                <>
                  <div className={styles.categoriesList__link}>
                    <a href={`${rootItem.category}`}>
                      <span>See All</span>
                      <IoIosArrowForward />
                    </a>
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

  const getDesktopCategoriesList = (parentPath = "/") => {
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
                      <a href={`${item.category}`} className={styles.groupLink}>
                        See All {item.name} <IoIosArrowForward />
                      </a>
                      <div className={styles.categoryList__groups}>
                        {categories.map(
                          (itemLevel2) =>
                            itemLevel2.parent === item.category && (
                              <Fragment key={itemLevel2.category}>
                                <a
                                  href={`${itemLevel2.category} `}
                                  className={styles.group__title}
                                  key={itemLevel2.category}
                                >
                                  {itemLevel2.name}
                                  <IoIosArrowForward />
                                </a>

                                {categories.map(
                                  (itemLevel3) =>
                                    itemLevel3.parent ===
                                      itemLevel2.category && (
                                      <a
                                        href={`${itemLevel3.category}`}
                                        className={styles.group__item}
                                        key={itemLevel3.category}
                                      >
                                        {itemLevel3.name}
                                      </a>
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
