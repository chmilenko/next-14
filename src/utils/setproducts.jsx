"use client";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function SetProducts() {

  const [itemsPerPage, setitemsPerPage] = useState(6);
  
  const isTablet = useMediaQuery("(max-width:1024px)");
  const isPhone = useMediaQuery("(max-width:576px)");

  useEffect(() => {
    if (isPhone) {
      setitemsPerPage(2);
    } else if (isTablet) {
      setitemsPerPage(4);
    } else {
      setitemsPerPage(6);
    }
  }, [isPhone, isTablet]);

  return {
    itemsPerPage
  };
}

export default SetProducts;
