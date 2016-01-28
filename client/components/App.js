class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: undefined,
      allVideos: [],
      searchText: ""
    };
    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  // componentDidMount() {
  //   this.setState({
  //     likesIncreasing: nextProps.likeCount > this.props.likeCount
  //   });
  // }

  handleChange(value) {
    this.setState({
      searchText: value
    });
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
        <Nav handleChange={this.handleChange} q={this.state.searchText}/>
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
