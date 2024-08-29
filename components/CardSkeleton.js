import React from "react";

const CardSkeleton = () => {
  return (
    <main>
      <div className="flex w-72 flex-col gap-4">
        <div className="skeleton h-44 w-full"></div>
        <div className="skeleton h-6 w-28"></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
    </main>
  );
};

export default CardSkeleton;
