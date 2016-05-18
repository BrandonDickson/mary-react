var path = require('path');
var fs = require('fs');
var ImageResizer = require('./image-resizer');
var crypto = require('crypto');

function GalleryPlugin(options) {
  this.options = options;
  this.resizer = new ImageResizer(options);
}

GalleryPlugin.prototype.apply = function(compiler) {
  var options = this.options;
  var resizer = this.resizer;

  compiler.plugin('emit', function(compilation, callback) {

    // get files in folder
    fs.readdir(options.folder, function(err, fileNames){
      if (err) return callback(err);

      var images = [];
      var imageNames = fileNames.filter(function(imageName){
        return new RegExp('jpg$').exec(imageName);
      });

      // loop through image names
      imageNames.forEach(function(imageName, index){
        var imagePath = path.join(options.folder, imageName);

        resizer.resize(imagePath, function(err, result){
          if (err) throw err;

          // add image to assets
          compilation.assets[imagePath] = {
            source: function() {
              return result.buffer;
            },
            size: function() {
              return result.buffer.length;
            }
          };

          // add image to list
          images.push({
            name: imageName,
            path: imagePath,
            width: result.width,
            height: result.height
          });

          // check if we are done
          if (images.length !== imageNames.length) return;

          var listPath = path.join(options.folder, 'images.json');
          var listContent = JSON.stringify(images);

          // add image list to assets
          compilation.assets[listPath] = {
            source: function(){
              return listContent;
            },
            size: function() {
              return listContent.length;
            }
          };

          // done!
          callback()

        });
      });
    });
  });
};

module.exports = GalleryPlugin;
