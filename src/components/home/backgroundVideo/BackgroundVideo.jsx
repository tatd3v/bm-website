import React from "react";
//import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";

export const BackgroundVideo = () => {
  const videoSource = "https://www.youtube.com/embed/Vh2q1mowUHk?controls=0";

  return (
    <>
      {/* <ReactPlayer
        className="react-player"
        height="100%"
        muted
        onReady
        playing
        url={"https://www.youtube.com/embed/Vh2q1mowUHk?controls=0"}
        width="100%"
      /> */}
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videoSource} />
      </video>
    </>
  );
};
