import React from "react";
import Img from "gatsby-image";

interface PortfolioItemComponentProps {
  reverse: boolean;
  title: string;
  description: React.ReactNode | string;
  caption: React.ReactNode | null;
  image: any;
}

const PortfolioItem = (props: PortfolioItemComponentProps) => {
  const { reverse, title, description, caption, image } = props;

  return (
    <div
      className={`flex items-center justify-between gap-8 mt-28 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-2/4">
        <h3 className="text-4xl mb-3 leading-normal">{title}</h3>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
      <div className="w-2/4">
        <Img
          className="rounded-md"
          loading="eager"
          fadeIn={true}
          fluid={image.childImageSharp.fluid}
        />
        <div className="border-4 mt-4 border-t-0 border-r-0 border-b-0 px-4">
          {caption !== null ? (
            <p className="text-lg text-gray-400 mb-0 ">{caption}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
