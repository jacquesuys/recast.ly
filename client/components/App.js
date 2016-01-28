class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: undefined,
      allVideos: [],
      searchText: '',
    };

    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.debouncedSearchYouTube = _.debounce(searchYouTube, 400);
  }

  componentDidMount() {
    const defaultOptions = {
      q: '',
      maxResults: 6,
      key: YOUTUBE_API_KEY
    };

    searchYouTube(defaultOptions, (data) => {
      this.setState({
        currentVideo: data.items[0],
        allVideos: data.items,
        searchText: '',
      })
    });
  }

  handleChange(value) {
    const options = {
      q: value,
      maxResults: 5,
      key: YOUTUBE_API_KEY
    };

    this.setState({
      searchText: value,
    });

    this.debouncedSearchYouTube(options, (data) => {
      this.setState({
        currentVideo: data.items[0],
        allVideos: data.items,
      })
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
