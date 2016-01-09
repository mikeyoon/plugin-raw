/* */ 
(function(process) {
  'use strict';
  module.exports = function theArgv() {
    return process.argv.slice(2);
  };
})(require('process'));
