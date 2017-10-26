var React = require ('react');
var {Link, IndexLink} = require ('react-router');

var Navigation = React.createClass ({
   render: function () {
   return (
     <div className = "top-bar">
       <div className="top-bar-left">
         <ul className="menu">
         <li className="menu-text">
           CHEESEPEDIA
         </li>
         
         </ul>
       </div>
       <div className="top-bar-right">
         <ul className="menu">
           <li className="menu-text">
            created by <a href="https://github.com/clemclem404/cheesewebsite" target = "_blank"> Pauline </a>
           </li>
         </ul>
       </div>
     </div>
     );
   },
 });

 module.exports = Navigation;
