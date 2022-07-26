import ProductGallery from "../../components/Products/imageGallery/ProductGallery";
import ProductTitle from '../../components/Products/ProductTitle';
// import ProductSpecifics from "../../components/Products/ProductSpecifics.jsx";
import styles from "./ProductDetails.module.scss";

const ProductDetails = ({ product }) => {
  return (
    <div className="appContainer">
      <div className={styles.productDetails}>
        <ProductGallery images={product.images} />
        <div className={`${styles.product} ml-10 mt-10`}>
          <ProductTitle product={product}/>
        </div>
      </div>
      <div className="specifics"></div>
    </div>
  );
};

export default ProductDetails;
