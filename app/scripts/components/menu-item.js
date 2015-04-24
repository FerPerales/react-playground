var MenuItem = React.createClass({
  render: function(){
    return (
      <li className="active">
        <a href="/dashboard" title="Dashboard">
          <div className="helper-font-24">
            <i className="icofont-dashboard"></i>
          </div>
          <span className="sidebar-text">Dashboard</span>
        </a>
      </li>
    );
  }
});
