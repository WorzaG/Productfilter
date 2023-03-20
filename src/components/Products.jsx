import React, { useState, useEffect } from "react";

function Products({ data, Productfilter }) {
  const namefilter = (name) => {
    let str = name.split(",");
    return str[0];
  };
  const returnData = () => {
    if (data.category === Productfilter) {
      return data;
    } else {
      return data;
    }
  };
  return (
    <div className="product-list">
      {data
        .filter((data) => {
          if (data.category === Productfilter) {
            return data;
          } else if (Productfilter === "ALL" || Productfilter === "") {
            return data;
          }
        })
        .map((item, index) => (
          <div className="product" key={index}>
            <img src={item.image} />
            <span id="name">{namefilter(item.name)}</span>
            <span id="price">{item.price} $</span>
            <button id="add">Add</button>
            <span id="category">{item.category}</span>
          </div>
        ))}
    </div>
  );
}

export default Products;
