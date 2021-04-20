import React from "react";

interface VideoComponentProps {
  sourceUri: string;
}

const Video = (props: VideoComponentProps) => {
  const { sourceUri } = props;

  return <video autoPlay loop className="ml-auto rounded-lg" src={sourceUri} />;
};

export default Video;
