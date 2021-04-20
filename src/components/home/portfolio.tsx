import React from "react";
import { graphql } from "gatsby";
import PortfolioItem from "./portfolioItem";
import { portfolioItemsCopy } from "../../copy/copy";

interface PortfolioComponentProps {
  images: any[];
}

const Portfolio = (props: PortfolioComponentProps) => {
  const { images } = props;
  let reverse = true;

  return (
    <section className="container max-w-screen-lg py-20 px-10 font-sans">
      <h1 className="font-bold mb-0 max-w-2xl text-6xl leading-snug tracking-normal text-green-900">
        How We&apos;re Different
      </h1>
      <h2 className="font-normal text-gray-500 mt-0 max-w-4xl leading-normal text-4xl mb-14 tracking-normal">
        Our mission is to provide every human on Earth with instant access to
        vital medical supplies.
      </h2>

      <p className="text-2xl leading-normal mb-5 tracking-normal">
        Recent advances in logistics — like instant, on-demand delivery — mainly
        serve those in the biggest, wealthiest cities.
      </p>
      <p className="text-2xl leading-normal mb-5 tracking-normal">
        Zipline is a transformational change in logistics. We provide equal
        access to on-demand delivery, globally, and for the deliveries that
        matter most.
      </p>

      {portfolioItemsCopy.map((portfolioItemCopy, idx) => {
        const { title, description, caption } = portfolioItemCopy;
        reverse = !reverse;

        return (
          <PortfolioItem
            reverse={reverse}
            title={title}
            description={description}
            caption={caption}
            key={idx}
            image={images[idx]}
          />
        );
      })}
    </section>
  );
};

export default Portfolio;
