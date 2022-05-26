import React from "react";
import Input from "./Input";
import Select from "./Select";

import { LANG_PER_CURRENCY } from "../constants";

const Price = ({ children, currency, size, decimals = 2, isEditable, onChange }) => {
  const price = new Intl.NumberFormat(LANG_PER_CURRENCY[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: decimals,
    minimumFractionDigits: 0,
  }).format(Number(children).toFixed(2));

  return (
    <>
      <div className={`container ${size ? `size-${size}` : ""}`}>
        <span className="price">
          {isEditable ? <Input id="price" value={children} onChange={onChange} /> : price}{" "}
          <span className="currency">
            (
            {isEditable ? (
              <Select
                id="currency"
                value={currency}
                onChange={onChange}
                options={Object.keys(LANG_PER_CURRENCY).map((key) => ({
                  value: key,
                  label: key,
                }))}
              />
            ) : (
              currency
            )})
          </span>
        </span>
      </div>
      <style jsx>{`
        .price {
          color: #2d0612;
          font-weight: bold;
          white-space: nowrap;
        }

        .currency {
          color: #b87a85;
        }

        .size-sm {
          font-size: 22px;
        }

        .size-md {
          font-size: 30px;
        }

        .size-lg {
          font-size: 35px;
        }

        @media only screen and (min-width: 1000px) {
          .size-sm {
            font-size: var(--font-size-sm);
          }

          .size-md {
            font-size: var(--font-size-md);
          }
        }
      `}</style>
    </>
  );
};

export default Price;
