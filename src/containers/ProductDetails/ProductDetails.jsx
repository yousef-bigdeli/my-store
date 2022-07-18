import ProductGallery from "../../components/Products/imageGallery/ProductGallery";
import styles from "./ProductDetails.module.scss";

const ProductDetails = ({ product }) => {
  return (
    <div className="container">
      <div className={styles.productDetails}>
        <ProductGallery images={product.images} />
        <div className={styles.product}></div>
      </div>
    </div>
  );
};

export default ProductDetails;
