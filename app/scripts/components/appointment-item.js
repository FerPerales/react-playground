var AppointmentItem = React.createClass({
  render: function() {
    return (
      <div>
        <p>
           7:00 am -  7:30 am
        </p>
        <div>
          <a href="#"><span>Start </span></a>
          <a href="#" title="Edit Appointment">Change </a>
          <a href="#">Cancel </a>
        </div>
        <h5>
          <a href="#">
            Mike Ross
          </a>
          <small> (Gregory House)</small>
        </h5>
      </div>
    );
  }

});
