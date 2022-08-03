import ProductGallery from '../components/imageGallery/ProductGallery';
import ProductTitle from '../components/ProductTitle';
// import ProductSpecifics from "../../components/Products/ProductSpecifics.jsx";

const ProductDetails = ({ product }) => {
  return (
    <div className="appContainer">
      <div className="flex">
        <ProductGallery images={product.images} />
        <div className="w-3/4 ml-10 mt-10">
          <ProductTitle product={product}/>
        </div>
      </div>
      <div className="specifics"></div>
    </div>
  );
};

export default ProductDetails;
