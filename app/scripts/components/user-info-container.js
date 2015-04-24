var user = {
  name: 'Test User',
  avatar: 'images/users/001.png'
};

var UserInfoContainer = React.createClass({
  render: function() {
    return (
      <div>
        <img alt={user.name} src={user.avatar} title={user.name}/>
          <ul>
            <li>
              <a href="#">
                <i></i>Settings
              </a>
            </li>
            <li>
              <a href="#">
                <i></i>Logout
              </a>
            </li>
          </ul>
      </div>
    );
  }
});
