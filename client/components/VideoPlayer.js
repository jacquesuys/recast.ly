const VideoPlayer = (props) => {
    let url;
    let title;
    let description;
    if (props.video) {
      url = `https://www.youtube.com/embed/${props.video.id.videoId}?autoplay=1`;
      title = props.video.snippet.title;
      description = props.video.snippet.description;
    } else {
      url = 'styles/down.png';
      title = '';
      description = '';
    }

    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <VideoDetails title={title} description={description} />
        </div>
      </div>
    );
}

window.VideoPlayer = VideoPlayer;
