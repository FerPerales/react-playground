var WidgetContainer = React.createClass({
  render: function() {
    return (
      <div>
        <UpcomingAppointmentsWidget />
        <UpcomingPrescriptionsWidget />
      </div>
    );
  }
});
