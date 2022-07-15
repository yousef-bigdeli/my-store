// import ProductList from "../../components/ShopList/ProductList";
import Filters from "../../components/ShopList/Filters";
import styles from "./ShopList.module.scss";

const ShopList = () => {
  return (
    <div className="container">
      <div className={styles.shopList}>
        <Filters />
        {/* <ProductList /> */}
      </div>
    </div>
  );
};

export default ShopList;
