var clean  = require('./lib/clean.js');
var reduce = require('./lib/reduce.js');
var intent = require('./lib/intent.js');
var async = require('async');

module.exports = function(cmd, cb) {
  async.waterfall([
    function(cb) {
      clean(cmd, function(err, cmdArr){
        cb(err, cmdArr);
      });
    },
    function(cmdArr, cb) {
      reduce(cmdArr, function(err, reducedArr){
        cb(err, reducedArr);
      });
    },
    function(reducedArr, cb) {
      intent(reducedArr, function(err, intentArr){
        cb(err, intentArr);
      })
    }
  ], function (err, result) {
    //TODO: since this is a nested module, and the errors may only be available from inside this module, need to lookup error before sending back?
    cb(err, result);
  });
};