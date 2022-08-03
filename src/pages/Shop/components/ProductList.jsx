import styles from "./ProductList.module.scss";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

const products = [
  {
    id: "MS-1",
    title: "Macbook pro 2021",
    image: "https://s6.uupload.ir/files/macbook_kiby.jpg",
    price: "123",
    rating: 4,
  },
  {
    id: "MS-2",
    title: "Product 2",
    image: "https://s6.uupload.ir/files/airpuds_09a9.jpg",
    price: "225",
    rating: 4.2,
  },
  {
    id: "MS-3",
    title: "Product 3",
    image: "https://s6.uupload.ir/files/macbook_kiby.jpg",
    price: "1000",
    rating: 3,
  },
  {
    id: "MS-4",
    title: "Product 4",
    image: "https://s6.uupload.ir/files/airpuds_09a9.jpg",
    price: "750",
    rating: 5,
  },
  {
    id: "MS-5",
    title: "Product 5",
    image: "https://s6.uupload.ir/files/macbook_kiby.jpg",
    price: "25",
    rating: 4.7,
  },
  {
    id: "MS-6",
    title: "Product 6",
    image: "https://s6.uupload.ir/files/airpuds_09a9.jpg",
    price: "99",
    rating: 2.5,
  },
  {
    id: "MS-7",
    title: "Product 7",
    image: "https://s6.uupload.ir/files/macbook_kiby.jpg",
    price: "139",
    rating: 3.2,
  },
  {
    id: "MS-8",
    title: "Product 8",
    image: "https://s6.uupload.ir/files/airpuds_09a9.jpg",
    price: "1200",
    rating: 4.6,
  },
  {
    id: "MS-9",
    title: "Product 9",
    image: "https://s6.uupload.ir/files/macbook_kiby.jpg",
    price: "2499",
    rating: 1,
  },
];

const ProductList = () => {
  return (
    <section className={styles.ProductList}>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <Link
              to={`/product/${product.id}/${product.title.replaceAll(" ", "-")}`}
              target="_blank"
            >
              <article className={styles.productBox}>
                <div className={styles.imageWrapper}>
                  <img
                    src={`${product.image}`}
                    alt={product.title}
                    width="250px"
                    height="250px"
                  />
                </div>
                <div className={styles.productDetails}>
                  <div></div>
                  <div>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.rating}>
                      <IoStarSharp /> <span>{product.rating}</span>
                    </div>
                  </div>
                  <div className={styles.price}>${product.price}</div>
                  <div></div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
