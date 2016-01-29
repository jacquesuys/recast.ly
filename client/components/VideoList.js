const VideoList = (props) => {
  const handleChecked = function(e) {
    props.handleChecked(e.target.checked);
  };
  return (<div className="video-list media">
    <div><label>Autoplay: <input type="checkbox" checked={props.auto} onChange={handleChecked} /></label></div>
    {props.videos.map(entry =>
      <VideoListEntry onVideoSelect={props.onVideoSelect} video={entry} key={entry.id.videoId} />
    )}
  </div>)
};

window.VideoList = VideoList;
