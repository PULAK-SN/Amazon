import React from "react";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "../Context/Reducer";
import { useStateValue } from "../Context/StateProvider";

function SubtotalPriceFormat({ isCheckbox = true }) {
  const [{ basket }] = useStateValue();
  return (
    <NumericFormat
      renderText={(value) => (
        <>
          <p>
            subtotal ({basket.length} items) : <strong>{value}</strong>
          </p>
          {isCheckbox && (
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains gift
            </small>
          )}
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType="text"
      thousandSeparator={true}
      prefix="$"
    />
  );
}

export default SubtotalPriceFormat;
