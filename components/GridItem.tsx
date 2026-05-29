import React, { ReactNode } from "react";

interface GridItemProps {
  children: ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ children }) => {
  const randomColor = getRandomColor();
  const rotationAngle = getRandomRotationAngle();

  return (
    <div
      className={`${randomColor} p-4 border-2 border-black brutal-shadow-sm hover:-translate-y-1 transition-transform duration-150 overflow-visible`}
      style={{ transform: `rotate(${rotationAngle}deg)` }}
    >
      {/* Text is allowed to overflow — brutalist bleed effect */}
      <div className="text-sm md:text-base break-words">
        {children}
      </div>
    </div>
  );
};

function getRandomColor() {
  const colorClasses = [
    "bg-yellow-300",
    "bg-cyan-300",
    "bg-lime-300",
    "bg-pink-300",
    "bg-purple-300",
    "bg-orange-300",
  ];
  return colorClasses[Math.floor(Math.random() * colorClasses.length)];
}

function getRandomRotationAngle() {
  return Math.floor(Math.random() * 13) - 6;
}

export default GridItem;
