var appointments;

$.get('/data/appointments.json', function(data){
  React.render(<MainContainer appointments={appointments} />, document.body);
});
