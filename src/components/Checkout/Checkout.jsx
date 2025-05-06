import React from "react";
import "./Checkout.css";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import SubtotalPriceFormat from "../Subtotal/SubtotalPriceFormat";

function Checkout() {
  const [{ basket }] = useStateValue();
  {
    console.log(basket);
  }
  return (
    <div className="checkout">
      <div>
        {basket?.length === 0 ? (
          <div className="checkout_empty">
            <div className="checkout_emptyInfo ">
              <h2>Your Amazon Cart is empty</h2>
              <Link className="checkout_emptyInfoLink" to="/">
                Shop today's deals
              </Link>
            </div>
            <div className="checkout_emptyDiv"></div>
            <small className="checkout_desc">
              The price and availability of items at Amazon.in are subject to
              change. The shopping cart is a temporary place to store a list of
              your items and reflects each item's most recent price. Do you have
              a promotional code? We'll ask you to enter your claim code when
              it's time to pay.
            </small>
          </div>
        ) : (
          <div className="checkout_left">
            <p className="checkout_title">Shopping Cart</p>
            {/* list of all checkout product */}

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.img}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}

            <div className="checkoutSubtotalBottom">
              <SubtotalPriceFormat isCheckbox={false} />
            </div>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
