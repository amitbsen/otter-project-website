import React from "react";
import { Media } from "../../types";

interface JumbotronComponentProps {
  mediaType: Media;
  sourceUri: string;
  subtitle: string;
  title: string;
}

const Jumbotron = (props: JumbotronComponentProps) => {
  const { mediaType, sourceUri, subtitle, title } = props;

  return (
    <div className="container px-10 max-w-screen-lg py-20">
      {mediaType === Media.video ? (
        <video
          autoPlay
          loop
          className="ml-auto rounded-lg"
          src={sourceUri}
        ></video>
      ) : null}

      <div>
        <h1 className="font-bold mb-1 max-w-2xl text-6xl leading-snug tracking-normal">
          {title}
        </h1>
        <h2 className="font-normal mt-2 max-w-2xl leading-normal text-4xl tracking-normal text-gray-500 ">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default Jumbotron;
