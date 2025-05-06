import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../Context/StateProvider";

function Product({ id, title, img, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon className="product_star" key={index + 1} />
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
