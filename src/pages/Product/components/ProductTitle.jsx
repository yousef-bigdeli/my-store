import { useState } from "react";
import styles from "./ProductTitle.module.scss";

const ProductTitle = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <h1 className="text-24">{product.title}</h1>
      <h2 className="mb-4 text-20">${product.price}</h2>
      <p className="mb-10">{product.description}</p>
      <div className="flex items-center mb-10">
        <span className="font-bold">Colors: </span>
        {product.colors.map((color) => (
          <div className="relative ml-3" key={color}>
            <label>
              <input
                type="radio"
                id={color}
                name="colors"
                value={selectedColor}
                className={`${styles.colorRadio} invisible absolute`}
                onChange={() => setSelectedColor(color)}
              />
              <span
                style={{ backgroundColor: color }}
                className={`${styles.productColor} block w-4 h-4 rounded-full`}
              ></span>
              <span
                className={`${styles.colorTitle} absolute text-10 -top-7 left-0 z-50 bg-black text-white rounded-8 p-1`}
              >
                {color}
              </span>
            </label>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-5">
        <div className="flex items-center border border-borderColor rounded py-3">
          <button
            className="px-3"
            onClick={() =>
              quantity > 1 ? setQuantity((prevValue) => +prevValue - 1) : null
            }
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            className="w-10 text-center"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="px-3"
            onClick={() => setQuantity((prevValue) => +prevValue + 1)}
          >
            +
          </button>
        </div>
        <button className="border border-borderColor py-3 px-10 bg-primaryColor text-white font-bold rounded ml-2">
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default ProductTitle;
