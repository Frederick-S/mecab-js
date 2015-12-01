var child_process = require('child_process');

module.exports = function (sentence, callback) {
    child_process.exec('echo ' + sentence + ' | mecab', callback);
};
