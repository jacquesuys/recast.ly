const VideoList = (props) => (
  <div className="video-list media">
    <VideoListEntry video={props.videos[0]} />
    <VideoListEntry video={props.videos[1]} />
    <VideoListEntry video={props.videos[2]} />
  </div>
);

window.VideoList = VideoList;
