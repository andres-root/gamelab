// Setup Class

'use strict';

(function() {
  const PIXI = require('pixi.js');
  const ATLAS_PATH = './images/braid/atlas/braid-atlas.json';
  
  //Aliases
  let Application = PIXI.Application,
      Container = PIXI.Container,
      Graphics = PIXI.Graphics,
      TextureCache = PIXI.utils.TextureCache,
      Sprite = PIXI.Sprite,
      Text = PIXI.Text,
      TextStyle = PIXI.TextStyle;
  
  let state, explorer, treasure, blobs, chimes, exit, player, terrain,
    door, healthBar, message, gameScene, gameOverScene, enemies, id, texture, element;

  let frameRate = 1000/30;
  let frames = [];
  let frame = 0;
  
  let app = new PIXI.Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
  });
  
  // app.renderer.backgroundColor = 0x061639;
  app.renderer.backgroundColor = 0xffffff;
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display = 'block';
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);
  document.querySelector('.wrapper').appendChild(app.view);
  
  PIXI.loader
    .add(ATLAS_PATH)
    .load(setup);
  
  function setup() {
    gameScene = new Container();
    app.stage.addChild(gameScene);

    let textures = PIXI.loader.resources[ATLAS_PATH].textures;

    // Load Terrain image
    terrain = new Sprite(textures['terrain.jpg']);
    gameScene.addChild(terrain);
    
    for (texture in textures) {
      frames.push(textures[texture]);
    }    
    setInterval(loop, frameRate)
  }

  function loop() {
    gameScene.removeChild(element);
    texture = frames[frame];
    element = new Sprite(texture);
    gameScene.addChild(element);
    frame = (frame + 1) % frames.length;
  }
})();
