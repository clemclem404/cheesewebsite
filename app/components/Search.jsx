var React = require ('react');


var Search = React.createClass({
  handleSearch: function () {
    var searchFromages= this.refs.searchFromages.value;

    this.props.onSearch(searchFromages);
  },
  render: function () {
    return(
      <div className="container__header">
        <input type="search"  ref="searchFromages" placeholder="rechercher un fromage" onChange={this.handleSearch}/>
      </div>
    )
  }

});

module.exports = Search;
