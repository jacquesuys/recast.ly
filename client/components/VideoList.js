const VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(entry =>
      <VideoListEntry onVideoSelect={props.onVideoSelect} video={entry} />
    )}
  </div>
);

window.VideoList = VideoList;
