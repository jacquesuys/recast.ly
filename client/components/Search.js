const Search = (props) => {
  const handleChange = function(e) {
    props.handleChange(e.target.value);
  };
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={props.q} onChange={handleChange} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  )
};

window.Search = Search;
