
var $ = require ('jquery');

module.exports = {
  setFromages: function (fromages) {
      if ($.isArray(fromages)) {
        localStorage.setItem('fromages', JSON.stringify(fromages));
        return fromages;
    }
  },
  getFromages: function () {
    var stringFromages = localStorage.getItem('fromages');
    var fromages = [];

    try {
      fromages = JSON.parse(stringFromages);
    } catch (e) {

    }
return $.isArray(fromages) ? fromages : [];
  },
  filterFromages: function (fromages, searchFromages) {
    var filteredFromages = fromages;




    filteredFromages = filteredFromages.filter((NouveauFromage) => {
      var fromages = NouveauFromage.fromages.toLowerCase();
      return searchFromages.length === 0 || fromages.indexOf(searchFromages)>-1;
    });



    return filteredFromages;
  }
};
