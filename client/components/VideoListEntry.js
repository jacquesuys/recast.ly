const VideoListEntry = (props) => {
  const onVideoSelect = function() {
    props.onVideoSelect(props.video);
  };

  return (<div className="video-list-entry">
    <div className="media-left media-middle" onClick={onVideoSelect}>
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.description} />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={onVideoSelect}>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>)
};

window.VideoListEntry = VideoListEntry;
