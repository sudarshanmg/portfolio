import React, { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {children}
    </div>
  );
};

export default GridContainer;
