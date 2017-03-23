var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var HomePage = require ('HomePage');
var Navigation = require ('Navigation');
var Repertoire = require ('Repertoire');
var Ajouter = require ('Ajouter');


// load foundation

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
<Router history = {hashHistory}>
  <Route path="/" component = {HomePage}>
    <Route path = "Ajouter" component={Ajouter}/>
    <IndexRoute  component={Repertoire}/>

    </Route>
  </Router>,

document.getElementById('app')
);
