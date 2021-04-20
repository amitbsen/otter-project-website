import React from "react";

interface VideoComponentProps {
  sourceUri: string;
}

const Video = (props: VideoComponentProps) => {
  const { sourceUri } = props;

  return (
    <div>
      <video autoPlay loop className="ml-auto rounded-lg" src={sourceUri} />
    </div>
  );
};

export default Video;
