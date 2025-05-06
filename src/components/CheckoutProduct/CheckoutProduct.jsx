import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../Context/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, price, title, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <div className="checkoutProduct_price">
          <p>$</p>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon className="product_star" />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
