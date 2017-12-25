// Game Class

'use strict';
const PIXI = require('pixi.js');

let pixiLoader = PIXI.loader.resources;
let loader = pixiLoader['./images/robot.json'].textures;

function load(path) {
  if (path) {

  }
}

module.exports = {
  load: load
};
