const Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleChange={props.handleChange} q={props.q}/>
    </div>
  </nav>
);

window.Nav = Nav;
