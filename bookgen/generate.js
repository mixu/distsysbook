var fs = require('fs'),
    path = require('path'),
    existsSync = (fs.existsSync ? fs.existsSync : path.existsSync),
    marked = require('marked'),
    util = require('util');

var header = fs.readFileSync('./layouts/default/header.html').toString(),
    footer = fs.readFileSync('./layouts/default/footer.html').toString();

var BookGen = function() { };

BookGen.generate = function(config) {
  // get all the files in input
  if(!Array.isArray(config.input.files)) {
    // iterate the path and add all files
    fs.readdir(config.input.files, function (err, files) {
      if (err) throw err;
      var basename = path.basename(config.input.files);
      BookGen.processFiles(config, files.map(function(relname) {
        return path.normalize( basename + relname);
      }));
    });
  } else {
    BookGen.processFiles(config, config.input.files);
  }
};

BookGen.processFiles = function(config, files) {
  if(config.input.order == 'sort') {
    // sort the files
    files.sort();
  }
  if(config.input.index) {
    // move the index file first
    var pos = files.indexOf(config.input.index);
    if(pos > -1) {
      files.splice(pos, 1);
      files.unshift(config.input.index);
    }
  }

  files = files.filter(function(name) {
    if(fs.exists(name)) {
     return !fs.statSync(name).isDirectory();
    }
  });
  // concatenate the files
  console.log(files);

  var full = files
    .sort(function(a, b) { return a.localeCompare(b); })
    .map(function(infile, index) {
      // add an anchor so that the epub links work
    return '<a name="'+path.basename(infile, '.md').replace(/^[^a-z]*/, '')+'"></a>' +
           BookGen.writeFile(infile, index, config);
  }).join('<div style="page-break-after: always;"></div>');

  // write a single page version as well
  fs.writeFile(config.output+'single-page.html',
    header.replace('assets/style.css', 'assets/printable.css')
      .replace(/{{prev}}/g, 'index.html')
      .replace(/{{next}}/g, 'index.html')
      .replace('<!-- index-insert -->', fs.readFileSync('./layouts/default/single-insert.html').toString()) +
          // change links to single page format
    full.replace('href="index.html"', 'href="#index"')
        .replace('href="intro.html"', 'href="#intro"')
        .replace('href="abstractions.html"', 'href="#abstractions"')
        .replace('href="time.html"', 'href="#time"')
        .replace('href="replication.html"', 'href="#replication"')
        .replace('href="eventual.html"', 'href="#eventual"')
        .replace('href="appendix.html"', 'href="#appendix"') +
    footer
        .replace(/{{prev}}/g, 'index.html')
        .replace(/{{next}}/g, 'index.html')
    );
  fs.writeFile(config.output+'ebook.html',
    header.replace(/<link[^>]+>/g, '')
          .replace(/{{prev}}/g, 'index.html')
          .replace(/{{next}}/g, 'index.html')
          .replace('<script type="text/javascript" src="assets/quote_colors.js"></script>', '')
          .replace('</head>', '<link type="text/css" rel="stylesheet" href="assets/ebook.css"/></head>') +
          // change links to single page format
    full.replace('href="index.html"', 'href="#index"')
        .replace('href="intro.html"', 'href="#intro"')
        .replace('href="abstractions.html"', 'href="#abstractions"')
        .replace('href="time.html"', 'href="#time"')
        .replace('href="replication.html"', 'href="#replication"')
        .replace('href="eventual.html"', 'href="#eventual"')
        .replace('href="appendix.html"', 'href="#appendix"') +
    footer
        .replace(/{{prev}}/g, 'index.html')
        .replace(/{{next}}/g, 'index.html')
    );
};

BookGen.writeFile = function(infile, index, config) {

  console.log(infile)
  var tokens = marked.lexer(fs.readFileSync(infile).toString());
  var content = marked
                  .parser(tokens)
                  .replace(/<(ul|ol)>/g, '<$1 class="list">')
                  .replace(/<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/mg, '<pre>$1</pre>')
                  .replace(/<p><img([^>]*)>\s*<\/p>/g, '<p class="img-container"><img$1></p>')
                  .replace(/%chapter_number%\.?/g, index+'.');

  var links = {
    'index': { prev: 'index.html', next: 'intro.html' },
    'intro': { prev: 'index.html', next: 'abstractions.html' },
    'abstractions': { prev: 'intro.html', next: 'time.html' },
    'time': { prev: 'abstractions.html', next: 'replication.html' },
    'replication': { prev: 'time.html', next: 'eventual.html' },
    'eventual': { prev: 'replication.html', next: 'appendix.html' },
    'appendix': { prev: 'eventual.html', next: 'appendix.html' },
  };


  // replace until the first alpha character
  var outName = path.basename(infile, '.md').replace(/^[^a-z]*/, '');

  fs.writeFileSync(config.output + outName + '.html',
    header
      .replace(/{{title}}/g, config.titles[outName +'.md' ] || 'Distributed systems for fun and profit')
      .replace(/{{prev}}/g, (links[outName] ? links[outName].prev : ''))
      .replace(/{{next}}/g, (links[outName] ? links[outName].next : ''))
      // special download header
      .replace('<!-- index-insert -->', (outName == 'index' ? fs.readFileSync('./layouts/default/index-insert.html') : '')) +
    content +
    footer
      .replace(/{{prev}}/g, (links[outName] ? links[outName].prev : ''))
      .replace(/{{next}}/g, (links[outName] ? links[outName].next : ''))
    );

  prev = outName+'.html';

  return content;
};

module.exports = BookGen;
