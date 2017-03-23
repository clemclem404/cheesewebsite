var React = require ('react');

var NouveauFromage = React.createClass({
  render: function () {

  var {id,fromages}= this.props;
    return (
      <div>
        {fromages}
      </div>

    )
  }
});

module.exports = NouveauFromage;
