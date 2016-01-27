const App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={exampleVideoData[0]} />
    </div>
    <div className="col-md-5">
      <VideoList videos={exampleVideoData} />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'))
