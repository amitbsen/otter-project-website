import React from "react";
import Jumbotron from "../components/shared/Jumbotron";
import Layout from "../components/shared/Layout";
import { Media } from "../types";

const InitiativesPage = () => {
  return (
    <Layout>
      <Jumbotron
        fullWidth
        mediaType={Media.image}
        sourceUri=""
        title="Safe, Fast, Precise, & Magical"
        subtitle="As the only drone delivery company operating at national scale in multiple countries, Zipline brings a unique combination of industry-leading technology and expertise to meet your large-scale delivery needs."
      />
    </Layout>
  );
};

export default InitiativesPage;
