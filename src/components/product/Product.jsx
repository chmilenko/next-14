import React from "react";
import Image from "next/image";
import style from "./product.scss";

function Product({ product }) {
  return (
    <div className="product">
      <Image
        src={product.image}
        width={170}
        height={170}
        alt="Picture of the author"
      />
      <div>
        <h3>Название: {product.title}</h3>
        <p className="price">Price: {product.price}</p>
        <p className="rating">Rating: {product.rating.rate}</p>
        <p className="count">Count buy: {product.rating.count}</p>
      </div>
    </div>
  );
}

export default Product;
