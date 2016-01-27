const VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(entry =>
      <VideoListEntry video={entry} />
    )}
  </div>
);

window.VideoList = VideoList;
