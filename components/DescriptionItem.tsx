import React from "react";

interface DescriptionItemProps {
  intro: string;
  features: string[];
  tech_stack: string[];
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  intro,
  features,
  tech_stack,
}) => {
  const Features = features.map((feature, index) => (
    <li key={index} className="py-2">
      {feature}
    </li>
  ));
  const TechStack = tech_stack.map((tech, index) => (
    <li key={index} className="px-2">
      {tech}
    </li>
  ));
  return (
    <div className="w-full flex flex-col text-justify p-4 font-mono">
      <h1 className="font-light text-center">{intro}</h1>
      {features.length !== 0 && (
        <>
          <h1 className="my-4 font-light text-3xl">Features</h1>
          <ul>{Features}</ul>{" "}
        </>
      )}

      <ul className="flex justify-center w-full py-4">{TechStack}</ul>
    </div>
  );
};

export default DescriptionItem;
