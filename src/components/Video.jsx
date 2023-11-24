const Video = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source
          src={process.env.PUBLIC_URL + "/images/video_(1080p).mp4"}
          type="video/mp4"
        />
      </video>
    </div>
  );
};
export default Video;
