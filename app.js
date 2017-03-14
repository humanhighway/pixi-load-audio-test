// var Loader = PIXI.loaders.Loader;
// var audioType = PIXI.loaders.Resource.LOAD_TYPE.AUDIO;
// loadFiles();

// function loadFiles() {
//   var loader = new Loader('', 1);
//   loader
//     .add([
//       { url: './assets/mp3/cat1.mp3', loadType: audioType },
//       { url: './assets/mp3/cat2.mp3', loadType: audioType },
//       { url: './assets/mp3/cat3.mp3', loadType: audioType },
//       { url: './assets/mp3/cat4.mp3', loadType: audioType },
//       { url: './assets/mp3/cat5.mp3', loadType: audioType },
//       { url: './assets/mp3/cat6.mp3', loadType: audioType },
//       { url: './assets/mp3/cat7.mp3', loadType: audioType },
//       { url: './assets/mp3/cat8.mp3', loadType: audioType },
//       { url: './assets/mp3/cat9.mp3', loadType: audioType },
//       { url: '/assets/mp3/cat10.mp3', loadType: audioType },
//       './assets/spritesheets/png_1.json',
//       './assets/spritesheets/png_2.json',
//       './assets/spritesheets/png_3.json',
//       './assets/spritesheets/png_4.json',
//       './assets/spritesheets/png_5.json',
//       './assets/spritesheets/png_6.json',
//       './assets/spritesheets/png_7.json',
//       './assets/spritesheets/png_8.json',
//       './assets/spritesheets/png_9.json',
//       './assets/spritesheets/png_10.json',
//     ])
//     .on('progress', _loadAssetsProgressHandler)
//     .once('complete', _loadAssetsCompletedHandler)
//     .load();
// }

// function _loadAssetsCompletedHandler(e) {
//   var time = new Date();
//   document.getElementById('text').value += '\n complete!: ' + e.progress + ' %, time ==> ' + time;
// }

// function _loadAssetsProgressHandler(e) {
//   var time = new Date();
//   document.getElementById('text').value += '\n' + e.progress + ' %, time ==> ' + time;
// }


function _loadAssetsProgressHandler(e) {
  console.log(e);
  var time = new Date();
  document.getElementById('text').value += '\n' + e.progress + ' %, time ==> ' + time;
}

function _loadAssetsCompletedHandler() {
  var time = new Date();
  document.getElementById('text').value += '\n complete!, time ==> ' + time;
}

var queue = new createjs.LoadQueue();
queue.setMaxConnections(6);
queue.maintainScriptOrder = false;
queue.on('progress', _loadAssetsProgressHandler);
// queue.on('complete', _loadAssetsCompletedHandler);
for( var i = 1; i < 11; i++) {
  queue.loadFile('./assets/mp3/cat_' + i + '.mp3');
}
queue.load();

