var path = require('path');
var fs = require('fs');
var reactDom = require('react-dom');

function PagePlugin(options) {
  this.options = options;
}

PagePlugin.prototype.apply = function(compiler) {

  var templateHtml = fs.readFileSync('./page-plugin/template.html', 'utf-8');

  compiler.emit('compiler', function(compilation, callback){

    // load the template
    var

    // generate an html file for the page

    // add file to assets
    compilation.assets[options.path] = {
      source: function() {
        return html;
      },
      size: function() {
        return html.length;
      }
    };


  });
};

module.exports = PagePlugin;
