var React = require ('react');
var NouveauFromage = require ('NouveauFromage');

var Repertoire = React.createClass({
  render: function () {
    var {fromages} = this.props;
    var renderFromages = ()  => {
      return fromages.map((fromages)=> {
        return (
          <NouveauFromage key={fromages.id} {...fromages}/>
      );
    });
  };
    return (
     <div>
    {renderFromages()}
      </div>
    )
  }
});

module.exports = Repertoire;
