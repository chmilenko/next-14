import React from "react";

function pagintation({
  setPage,
  page,
  startIndex,
  itemsPerPage,
  items,
}) {
  const visibleProducts = items?.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return {
    visibleProducts,
    handleNextPage,
    handlePrevPage,
  };
}

export default pagintation;
