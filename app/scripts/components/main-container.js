var MainContainer = React.createClass({
  render: function() {
    return (
      <div>
        <NavigationBar />
        <DashboardHeader />
        <DashboardContainer />
      </div>
    );
  }
});
