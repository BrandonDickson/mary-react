var assert = require('assert');
var ImageResizer = require('./image-resizer');

describe('ImageResizer', function(){
  it('should resize an image', function(done) {

    var path = './engagement/photos/59085_513930275291304_769481565_n.jpg'
    var resizer = new ImageResizer();

    resizer.resize(path, function(err, result) {
      if (err) throw err;

      assert(result.buffer, 'buffer is null');
      assert(result.width === 640, 'width should be 640');
      assert(result.height === 480, 'height should be 480');
      done();
    });
  });
});
