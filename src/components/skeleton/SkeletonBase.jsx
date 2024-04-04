import React from "react";
import Skeleton from "@mui/material/Skeleton";

function SkeletonBase({ count, width, height }) {
  const skeletonItems = Array.from({ length: count }, (_, index) => (
    <Skeleton key={index} variant="rectangular" width={width} height={height} />
  ));

  return (
    <div className="content">
      <div className="container">{skeletonItems}</div>
    </div>
  );
}

export default SkeletonBase;
 