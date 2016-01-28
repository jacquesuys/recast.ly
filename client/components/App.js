class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0]
    };
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onVideoSelect(videoClicked) {
    this.setState({
      currentVideo: videoClicked
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
          <VideoList onVideoSelect={this.onVideoSelect} videos={exampleVideoData} />
        </div>
      </div>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'))
