var React = require ('react');

 var Ajouter= React.createClass({
   handleSubmit: function (e) {

   e.preventDefault();
   var texteFromage = this.refs.texteFromage.value;

   if (texteFromage.length >0 ) {
     this.refs.texteFromage.value = '';
     this.props.onAjouter(texteFromage);

   } else {

     this.refs.texteFromage.focus();

     }
   },
   render: function () {
     return (
       <div className="container__footer">
         <form onSubmit={this.handleSubmit}>
           <input type="text" ref="texteFromage" placeholder="quel est le nom de votre fromage ?"/>
           <button className="button expanded">Ajouter</button>
         </form>
       </div>
     );
   }
 });

 module.exports = Ajouter;
