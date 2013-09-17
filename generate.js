var BookGen = require('./bookgen/generate.js');

var config = {
  output: __dirname + '/output/',

  input: {

    dir: __dirname + '/input/',

    files: __dirname + '/input/',

    // specify exact order later on, when single page v is generated

    index: 'index.html'
  },

  titles: {
  },

  layout: __dirname + '/layouts/default/'

};

BookGen.generate(config);
