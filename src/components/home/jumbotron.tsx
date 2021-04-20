import React from "react";

const Jumbotron = () => {
  return (
    <div className="container px-10 max-w-screen-lg py-20">
      <video
        autoPlay
        loop
        className="ml-auto rounded-lg"
        src="https://flyzipline.com/assets/video/hero.mp4"
      ></video>

      <div>
        <h1 className="font-bold mb-1 max-w-2xl text-6xl leading-snug tracking-normal text-green-900">
          Vital, On-Demand Delivery for the World
        </h1>
        <h2 className="font-normal mt-2 max-w-2xl leading-normal text-4xl tracking-normal text-gray-500 ">
          Enabled by the fastest and most experienced drone delivery service
        </h2>
      </div>
    </div>
  );
};

export default Jumbotron;
