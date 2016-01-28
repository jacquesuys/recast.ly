const VideoDetails = (props) => (
  <div className="video-player-details">
    <h3>{props.title}</h3>
    <div>{props.description}</div>
  </div>
);

window.VideoDetails = VideoDetails;
