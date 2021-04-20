import React from "react";
import { Media } from "../../types";
import Video from "./Video";

interface JumbotronComponentProps {
  fullWidth: boolean;
  mediaType: Media;
  sourceUri: string;
  subtitle: string;
  title: string;
}

const Jumbotron = (props: JumbotronComponentProps) => {
  const { fullWidth = true, mediaType, sourceUri, subtitle, title } = props;

  return (
    <div className="container px-10 max-w-screen-lg py-20">
      {mediaType === Media.video ? <Video sourceUri={sourceUri} /> : null}

      <div className={`${fullWidth ? "" : "max-w-2xl"}`}>
        <h1 className="font-bold mb-1 text-6xl leading-snug tracking-normal">
          {title}
        </h1>
        <h2 className="font-normal mt-2 leading-normal text-4xl tracking-normal text-gray-500 ">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default Jumbotron;
