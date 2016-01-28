class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: undefined,
      allVideos: []
    };
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onVideoSelect(videoClicked) {
    this.setState({
      currentVideo: videoClicked,
      allVideos: exampleVideoData
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.allVideos} />
        </div>
      </div>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'))
