var menuItemsData = [
  {title: 'Dashboard', icon: 'images/icons/dashboard.png'},
  {title: 'New appointment', icon: 'images/icons/new-appointment.png'}
];

var NavigationBar = React.createClass({
  render: function() {
    var menuItems = [];
    menuItemsData.forEach(function(menuItem){
      console.log(menuItem);
      menuItems.push(<MenuItem />);
    });

    return (
      <div>
        {menuItems}
      </div>
    );
  }
});
