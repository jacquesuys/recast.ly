class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: undefined,
      allVideos: [],
      searchText: '',
    };

    this.defaultOptions = {
      q: '',
      maxResults: 6,
      key: YOUTUBE_API_KEY
    };

    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.debouncedSearchYouTube = _.debounce(searchYouTube, 400);
  }

  componentDidMount() {

    searchYouTube(this.defaultOptions, (data) => {
      this.setState({
        currentVideo: data.items[0],
        allVideos: data.items,
        searchText: '',
      })
    });
  }

  handleChange(value) {
    this.defaultOptions.q = value;

    this.setState({
      searchText: value,
    });

    this.debouncedSearchYouTube(this.defaultOptions, (data) => {
      this.setState({
        currentVideo: data.items[0],
        allVideos: data.items,
      })
    });
  }

  onVideoSelect(videoClicked) {
    this.setState({
      currentVideo: videoClicked,
    });

    searchYouTube(this.defaultOptions, (data) => {
      this.setState({
        allVideos: data.items,
      })
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
