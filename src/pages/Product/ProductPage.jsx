import ProductDetails from "./container/ProductDetails";
// import { useParams } from "react-router-dom";

const ProductPage = () => {
  // const { id, title } = useParams();
  const product = {
    id: "MS-1",
    title: "Macbook pro 2020",
    images: [
      { image: "https://s6.uupload.ir/files/macbook_kiby.jpg", text: "mac1" },
      {
        image:
          "https://s6.uupload.ir/files/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs_37u4.jpg",
        text: "mac2",
      },
      {
        image: "https://s6.uupload.ir/files/dbohn_200506_4012_0012_eqvk.jpg",
        text: "mac3",
      },
      {
        image:
          "https://s6.uupload.ir/files/cc201060-8ffe-11ea-aff7-9444289fde6e.cf_244n.jpg",
        text: "mac4",
      },
    ],
    price: "3200",
    rating: 4.7,
    description: "Apple Macbook pro 2020 M1 8gb 256",
    colors: ["grey", "silver", "black", "white"],
    quantity: 12,
    specifics: {},
  };

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductPage;
