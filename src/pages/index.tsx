import React from "react";
import { graphql } from "gatsby";

import Description from "../components/home/description";
import Jumbotron from "../components/home/jumbotron";
import Portfolio from "../components/home/portfolio";
import Navbar from "../components/shared/navbar";

interface HomePageComponentProps {
  data: any;
}

const HomePage = (props: HomePageComponentProps) => {
  const {
    data: { Map, Plasma, Pres, Zip, Jobs },
  } = props;

  return (
    <>
      <Navbar />
      <Jumbotron />
      <Description />
      <Portfolio images={[Map, Plasma, Pres, Zip, Jobs]} />
    </>
  );
};

export const query = graphql`
  query {
    Map: file(relativePath: { eq: "map.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    Plasma: file(relativePath: { eq: "plasma.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    Pres: file(relativePath: { eq: "gh-pres.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    Zip: file(relativePath: { eq: "zip.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    Jobs: file(relativePath: { eq: "jobs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default HomePage;
