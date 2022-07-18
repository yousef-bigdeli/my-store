import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import { IoCartOutline, IoTrash, IoCloseCircleOutline } from "react-icons/io5";

const cartItems = [
  {
    id: 1,
    name: "Macbook Pro 2020",
    quantitny: 1,
    price: "1200",
    image: ["https://s6.uupload.ir/files/macbook_kiby.jpg"],
  },
  {
    id: 2,
    name: "Airpuds",
    quantitny: 2,
    price: "300",
    image: ["https://s6.uupload.ir/files/airpuds_09a9.jpg"],
  },
];
const Cart = () => {
  return (
    <>
      <div className={styles.cart}>
        <Link to="/cart" className={`${styles.cart__link}`}>
          <div className={styles.icon}>
            <IoCartOutline style={{ width: "24px", height: "24px" }} />
          </div>
          {cartItems.length > 0 && (
            <div className={styles.cart__badge}>
              {cartItems.reduce((total, item) => (total += +item.quantitny), 0)}
            </div>
          )}
        </Link>

        <div
          className={`${styles.miniCartWrapper} ${
            cartItems.length > 0 && styles.cartHover
          }`}
        >
          <div className={styles.miniCart}>
            <div>
              {cartItems.map((item) => (
                <div className={styles.cartItem} key={item.id}>
                  <Link
                    to={`/product/${item.id}/${item.name.replaceAll(" ", "-")}`}
                  >
                    <img src={`${item.image}`} alt={item.name} />
                  </Link>
                  <div className={styles.cartItem__details}>
                    <Link to={`/product/${item.id}/${item.name.replaceAll(" ", "-")}`}>
                      <p>{item.name}</p>
                    </Link>
                    <div>${item.price}</div>
                    <div className={styles.cartItem__quantity}>
                      <button>
                        {item.quantitny === 1 ? <IoTrash /> : "-"}
                      </button>
                      <span>{item.quantitny}</span>
                      <button>+</button>
                    </div>
                  </div>
                  <button className={styles.closeBtn}>
                    <IoCloseCircleOutline />
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <span>
                $
                {cartItems.reduce(
                  (total, item) => (total += +item.price * +item.quantitny),
                  0
                )}
              </span>
            </div>
            <Link to="/cart" className={styles.checkoutBtn}>
              CHECK OUT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
