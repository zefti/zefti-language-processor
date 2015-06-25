var utils = require('zefti-utils');
module.exports = function(msg, cb){
  if (!msg) return cb({errCode: '556bda45c6523900df226461', payload:msg});
  if (utils.type(msg) === 'array') return cleanArrayElements(msg, cb);
  if (utils.type(msg) === 'string') return convertToArray(msg, cb);
  return cb({errCode: '556bdf26c6523900df226463', payload:msg});
};

function convertToArray(msg, cb){
  var separator = null;
  if(msg.indexOf(' ') !== -1) {
    if (separator) return cb({errCode: '556bdf26c6523900df226464', payload:msg});
    separator = ' ';
  }
  if(msg.indexOf(',') !== -1) {
    if (separator) return cb({errCode: '556bdf26c6523900df226464', payload:msg});
    separator = ',';
  }
  if(msg.indexOf('/') !== -1) {
    if (separator) return cb({errCode: '556bdf26c6523900df226464', payload:msg});
    separator = '/';
  }
  if (!separator) return cb({errCode: '556bdf27c6523900df226466', payload:msg});
  var msgArr = msg.split(separator);
  cleanArrayElements(msgArr, cb);
}

function cleanArrayElements(msgArr, cb){
  var cleanArr = [];
  var err = null;
  msgArr.forEach(function(word){
    if (utils.type(word) !== 'string' || utils.type(word) !== 'number') {
      err = true;
    } else {
      cleanArr.push(word);
    }
  });

  if (err) return cb({errCode: '556bdf27c6523900df226465', payload:msg});
  return cb(null, clearArr);
}

