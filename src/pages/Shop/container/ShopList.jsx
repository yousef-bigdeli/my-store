import ProductList from "../components/ProductList";
import Filters from "../components/Filters";

const ShopList = () => {
  return (
    <div className="appContainer">
      <div className="flex flex-col w-full p-4 md:flex-row">
        <Filters />
        <ProductList />
      </div>
    </div>
  );
};

export default ShopList;
