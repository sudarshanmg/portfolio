import React, { ReactNode } from "react";

interface GridItemProps {
	children: ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ children }) => {
	const randomSize = Math.random() < 0.5 ? "large" : "small";
	const randomColor = getRandomColor();
	const rotationAngle = getRandomRotationAngle();

	return (
		<div
			className={`${randomColor} p-4 rounded shadow-lg`}
			style={{ transform: `rotate(${rotationAngle}deg)` }}
		>
			<div className="text-sm md:text-base lg:text-lg xl:text-xl overflow-hidden">
				{children}
			</div>
		</div>
	);
};

function getRandomColor() {
	const colorClasses = [
		"bg-yellow-300",
		"bg-blue-300",
		"bg-green-300",
		"bg-pink-300",
		"bg-purple-300",
		"bg-orange-300",
	];
	const randomIndex = Math.floor(Math.random() * colorClasses.length);
	return colorClasses[randomIndex];
}

function getRandomRotationAngle() {
	return Math.floor(Math.random() * 21) - 10; // Random angle between -10 and 10 degrees
}

export default GridItem;
