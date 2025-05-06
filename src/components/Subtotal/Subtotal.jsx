import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "./Subtotal.css";
import SubtotalPriceFormat from "./SubtotalPriceFormat";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <SubtotalPriceFormat />
      <button>Procees to checkout</button>
    </div>
  );
}

export default Subtotal;
