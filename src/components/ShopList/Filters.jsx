import { useState } from "react";
import styles from "./Filters.module.scss";
import { BiFilterAlt, BiLeftArrowAlt, BiPlus, BiMinus } from "react-icons/bi";

const Filters = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {/* Mobile Filters */}
      <div className={styles.mobileFilters}>
        <button className={styles.filterBtn} onClick={() => setIsShow(true)}>
          <div className={styles.icon}>
            <BiFilterAlt />
          </div>
          <div>Filter</div>
        </button>
        <div className={styles.filterMenu}>
          <div
            className={`${styles.filterMenu__cover} ${
              isShow ? styles.show : ""
            }`}
            onClick={() => setIsShow(false)}
          ></div>
          <div
            className={`${styles.filterMenu__content} ${
              isShow ? styles.show : ""
            }`}
          >
            <div className={styles.filterCloseBtn}>
              <button onClick={() => setIsShow(false)}>
                <BiLeftArrowAlt />
                Close
              </button>
            </div>
            <Accordions type="mobile" />
          </div>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className={styles.desktopFilters}>
        <Accordions type="desktop" />
      </div>
    </>
  );
};

export default Filters;

const Accordions = ({ type }) => {
  const [showFilterAccardion, setShowFilterAccardion] = useState({
    category: true,
    price: true,
    brand: true,
  });

  const handleShowAccardion = (e) => {
    setShowFilterAccardion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <div className={styles.accardion}>
      <div className={styles.accardionItem}>
        <input
          type="checkbox"
          id={`category-${type}`}
          name="category"
          defaultChecked={showFilterAccardion["category"]}
          onChange={handleShowAccardion}
        />
        <label htmlFor={`category-${type}`} className={styles.accardionHeader}>
          <span>Category</span>
          {showFilterAccardion["category"] ? <BiMinus /> : <BiPlus />}
        </label>

        <div
          className={`${styles.accardionCollapse} ${
            showFilterAccardion["category"] ? styles.show : ""
          }`}
        >
          category content
        </div>
      </div>

      <div className={styles.accardionItem}>
        <input
          type="checkbox"
          id={`brand-${type}`}
          name="brand"
          defaultChecked={showFilterAccardion["brand"]}
          onChange={handleShowAccardion}
        />
        <label htmlFor={`brand-${type}`} className={styles.accardionHeader}>
          <span>Brand</span>
          {showFilterAccardion["brand"] ? <BiMinus /> : <BiPlus />}
        </label>

        <div
          className={`${styles.accardionCollapse} ${
            showFilterAccardion["brand"] ? styles.show : ""
          }`}
        >
          Brand content
        </div>
      </div>

      <div className={styles.accardionItem}>
        <input
          type="checkbox"
          id={`price-${type}`}
          name="price"
          defaultChecked={showFilterAccardion["price"]}
          onChange={handleShowAccardion}
        />
        <label htmlFor={`price-${type}`} className={styles.accardionHeader}>
          <span>Price</span>
          {showFilterAccardion["price"] ? <BiMinus /> : <BiPlus />}
        </label>

        <div
          className={`${styles.accardionCollapse} ${
            showFilterAccardion["price"] ? styles.show : ""
          }`}
        >
          Price content
        </div>
      </div>
    </div>
  );
};
