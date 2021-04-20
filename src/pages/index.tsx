import React from "react";
import { graphql } from "gatsby";

import Description from "../components/home/Description";
import Jumbotron from "../components/shared/Jumbotron";
import Portfolio from "../components/home/Portfolio";
import Layout from "../components/shared/Layout";
import { Media } from "../types";

interface HomePageComponentProps {
  data: any;
}

const HomePage = (props: HomePageComponentProps) => {
  const {
    data: { Map, Plasma, Pres, Zip, Jobs },
  } = props;

  return (
    <Layout>
      <Jumbotron
        mediaType={Media.video}
        sourceUri={"https://flyzipline.com/assets/video/hero.mp4"}
        subtitle={
          "Enabled by the fastest and most experienced drone delivery service"
        }
        title={"Vital, On-Demand Delivery for the World"}
      />
      <Description />
      <Portfolio images={[Map, Plasma, Pres, Zip, Jobs]} />
    </Layout>
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
