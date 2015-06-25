var utils = require('zefti-utils');
var articles = require('../mappings/articles.json');

module.exports = function(cmd) {
  var finalArr = [];
  if (utils.type(cmd) !== 'array') {
    return cb({errCode: '556bd8cec6523900df22645f', payload:msg});
  }

  //remove all articles
  cmd.forEach(function(word){
    if(articles.indexOf(word) !== -1) {
      finalArr.push(word);
    }

    //return the final clean msg array
    return cb(null, finalArr);

  });
};