var gm = require('gm').subClass({ imageMagick:true });
var assert = require('assert');

function ImageResizer(options) {
  this.options = Object.assign({
    landscape:[640, 480],
    portrait:[480, 640],
    quality: 0
  }, options || { });
}

ImageResizer.prototype.resize = function(path, callback) {
  var image = gm(path);
  var options = this.options;

  image.size(function(err, size){
    if (err) return callback(err);

    var width, height;

    if (size.width > size.height) {
      width = options.landscape[0];
      height = options.landscape[1];
    }
    else {
      width = options.portrait[0];
      height = options.portrait[1];
    }

    image
      .resize(width, height, '^')
      .crop(width, height)
      .gravity('center')
      .quality(options.quality)
      .toBuffer('JPEG', function(err, buffer){
        if (err) callback(err);
        else callback(null, {
          buffer: buffer,
          width: width,
          height: height
        });
      });
  });
};


module.exports = ImageResizer;
