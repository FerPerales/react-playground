var menuItemsData = [
  {key: 1, title: 'Dashboard', iconClass: 'images/icons/dashboard.png'},
  {key: 2, title: 'New appointment', iconClass: 'images/icons/new-appointment.png'}
];

var NavigationBar = React.createClass({
  render: function() {
    var menuItems = [];
    menuItemsData.forEach(function(menuItem){
      menuItems.push(<MenuItem key={menuItem.key} data={menuItem} />);
    });

    return (
      <div>
        {menuItems}
      </div>
    );
  }
});
