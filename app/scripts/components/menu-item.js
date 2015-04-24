var MenuItem = React.createClass({
  render: function(){
    return (
      <li>
        <a href='#' title={this.props.data.title}>
          <div>
            <i class={this.props.data.iconClass}></i>
          </div>
          <span>{this.props.data.title}</span>
        </a>
      </li>
    );
  }
});
