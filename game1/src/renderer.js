// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

'use strict';

const electron = require('electron')
const PIXI = require('pixi.js');
const Game = require('./game');

function pixiHello() {
  let type = 'WebGL';
  if(!PIXI.utils.isWebGLSupported()){
    type = 'canvas';
  }
  PIXI.utils.sayHello(type);
}

function run() {
  pixiHello();
  Game.start();
  console.log('Game is running...');
}

run();
