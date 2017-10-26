var React = require ('react');
var uuid = require('node-uuid');

var Navigation = require('Navigation');
var Ajouter = require('Ajouter');
var Repertoire = require ('Repertoire');
var Search = require('search');
var FromagesAPI = require ('FromagesAPI');


var HomePage = React.createClass({
 getInitialState: function (){
   return {
     searchFromages: '',
     fromages: FromagesAPI.getFromages()
   };
 },
 componentDidUpdate: function () {
   FromagesAPI.setFromages(this.state.fromages);
 },
 handleAjouter: function (fromages) {
   this.setState ({
     fromages: [
       ...this.state.fromages,
       {
         id: uuid(),
         fromages: fromages
       }
     ]
   });
 },
 handleSearch: function (searchFromages){
   this.setState({
     searchFromages: searchFromages.toLowerCase()
   });
 },
    render: function () {
   var {fromages, searchFromages} = this.state;
   var filteredFromages = FromagesAPI.filterFromages(fromages, searchFromages);

      return (
        <div>
       <Navigation/>


         <div className ="row">
           <div className = "column small-centered small-11 medium-6 large-5">
             <div className="container">
       <Search onSearch={this.handleSearch}/>
       <Repertoire fromages={filteredFromages}/>
       <Ajouter  onAjouter={this.handleAjouter}/>

        </div>
     </div>
   </div>
 </div>
      )
    }
  });


 module.exports = HomePage;
