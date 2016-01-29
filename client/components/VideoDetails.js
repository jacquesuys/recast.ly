const VideoDetails = (props) => (
  <div className="video-player-details">
    <h3>{props.title}</h3>
    <div>{props.description}</div>
    <div>Views: {props.stats.viewCount}</div>
    <hr/>
    <div>Likes: {props.stats.likeCount}</div>
    <div>Dislike: {props.stats.dislikeCount}</div>
    <div>Comments: {props.stats.commentCount}</div>
  </div>
);

window.VideoDetails = VideoDetails;
