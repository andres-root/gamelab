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

let app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true,
  transparent: false,
  resolution: 1
});

function setup() {

  pixiHello();

  app.renderer.backgroundColor = 0x061639;
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display = 'block';
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);

  document.querySelector('.wrapper').appendChild(app.view);
}

console.log(Game.start());
