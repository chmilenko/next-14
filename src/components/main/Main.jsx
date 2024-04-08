"use client";
import React, { useState } from "react";

import SkeletonBase from "../skeleton/SkeletonBase";
import Button from "../../ui/Button/Button.jsx";
import Product from "../product/Product";

import pagination from "../../utils/pagintation.jsx";
import SetProducts from "../../utils/setproducts.jsx";
import useProducts from "../../hooks/useProducts.jsx";

let url = "https://fakestoreapi.com/products";

function Main() {
  const { itemsPerPage } = SetProducts();

  const [page, setPage] = useState(1);
  const { products, error } = useProducts(url);

  if (!products || error) {
    return <SkeletonBase count={itemsPerPage} width={400} height={400} />;
  }

  const startIndex = (page - 1) * itemsPerPage;

  const { visibleProducts, handleNextPage, handlePrevPage } = pagination({
    setPage,
    page,
    startIndex,
    itemsPerPage,
    items: products,
  });
  
  return (
    <div className="content">
      <div className="container">
        {visibleProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <Button props={{ text: "Назад", click: handlePrevPage }} />
        <span>{page}</span>
        <Button props={{ text: "Вперед", click: handleNextPage }} />
      </div>
    </div>
  );
}

export default Main;
