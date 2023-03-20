import React, { useEffect, useState } from "react";

function Categories({ data, Productfilter, setFilter }) {
  const categories = data.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["ALL"]
  );

  const handleclick = (item) => {
    setFilter(item);
    console.log(Productfilter);
  };
  return (
    <div className="categories">
      {categories.map((item, id) => (
        <div
          className="category-item"
          key={id}
          onClick={() => handleclick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Categories;
