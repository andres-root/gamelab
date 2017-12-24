// Game Class

'use strict';

function _privateMethod() {
  return 'private method here';
}

function load() {
  console.log(_privateMethod());
}

module.exports = {
  load: load
};
