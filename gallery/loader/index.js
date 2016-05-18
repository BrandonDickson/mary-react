
var loaderUtils = require("loader-utils");
var ImageResizer = require('../plugin/image-resizer');

module.exports.raw = true;

module.exports = function(content) {
  if (!this.emitFile) throw new Error("emitFile is required from the module system");

  this.cacheable && this.cacheable();
  this.addDependency(this.resourcePath);

  var callback = this.async();
  var resizer = new ImageResizer(this.options);

  resizer.resize(this.resourcePath, function(err, result){
    if (err) return callback(err);

    callback(null, result.buffer);

  });
  
};
