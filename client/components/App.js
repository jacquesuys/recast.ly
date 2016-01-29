class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: undefined,
      allVideos: [],
      searchText: '',
      currentStatistics: [],
      autoPlay: true,
    };

    this.handleChecked = this.handleChecked.bind(this);
    this.updateVideoDetails = this.updateVideoDetails.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.debouncedSearchYouTube = _.debounce(searchYouTube, 400);
  }

  componentDidMount() {

    searchYouTube('', (data) => {
      this.setState({
        currentVideo: data.items[0],
        allVideos: data.items,
        searchText: '',
      });

      this.updateVideoDetails();
    });
  }

  updateVideoDetails() {
    getVideoDetails(this.state.currentVideo.id.videoId, (data) => {
      this.setState({
        currentStatistics: data.items[0].statistics,
      });
    });
  }

  handleChange(value) {
    this.setState({
      searchText: value,
    });

    this.debouncedSearchYouTube(value, (data) => {
      this.setState({
        currentVideo: data.items[0],
        allVideos: data.items,
      });

      this.updateVideoDetails();
    });
  }

  handleChecked(checked) {

    this.setState({
      autoPlay: checked
    });
  }

  onVideoSelect(videoClicked) {
    this.setState({
      currentVideo: videoClicked,
    });

    this.updateVideoDetails();
  }

  render() {
    return (
      <div>
        <Nav handleChange={this.handleChange} q={this.state.searchText}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} stats={this.state.currentStatistics} auto={this.state.autoPlay} />
        </div>
        <div className="col-md-5">
          <VideoList onVideoSelect={this.onVideoSelect} handleChecked={this.handleChecked} videos={this.state.allVideos} auto={this.state.autoPlay} />
        </div>
      </div>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'))
