var client = {
  logo: 'images/clients/001.png',
  name: 'Demo client'
};

var BrandingContainer = React.createClass({
  render: function() {
    return (
      <img alt={client.name} src={client.logo}/>
    );
  }
});
