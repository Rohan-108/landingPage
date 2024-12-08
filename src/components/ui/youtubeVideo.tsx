import React, { useState, useEffect, useCallback, useRef } from "react";

interface IProps {
  videoId?: string;
  autoPlay?: boolean;
  title?: string;
}
// https://drive.google.com/file/d/1OZYdbuORXbAgnL1jmtpZQSc6E3jkBWfr/view?usp=sharing
const YoutubeVideo: React.FC<IProps> = (props) => {
  const { title } = props;
  // const videoURL = `https://www.youtube.com/embed/${videoId}${
  //   autoPlay ? "?autoplay=1" : ""
  // }`;
  const videoURL =
    "https://res.cloudinary.com/dt3o8ldp9/video/upload/v1733682728/cycling_1_ov3qdp.mp4";
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState<number>(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    const newHeight =
      Math.floor(height * ratio) >= 500 ? 500 : Math.floor(height * ratio);
    setVideoHeight(newHeight);
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [videoHeight, handleChangeVideoWidth]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      width="100%"
      height={`${videoHeight}px`}
      src={videoURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YoutubeVideo;
