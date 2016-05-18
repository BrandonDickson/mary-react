var fs = require('fs');
var EventEmitter = require('events');
var server = require('react-dom/server');

function HtmlRenderer(options) {

  EventEmitter.apply(this);

  this.options = Object.assign({
    template: '../page-plugin/template.html'
  }, options || {});
}

HtmlRenderer.prototype.getTemplate = (callback) {
  var self = this;

  switch(this.templateState) {

    case 'loading':
      this.on('template-loaded', function() {
        callback(self.templateError, self.template);
      });
      break;

    case 'loaded':
      callback(this.templateError, this.template);
      break;

    default:
      fs.readFile(this.options.template, 'utf-8', function(err, template) {

        self.templateState = 'loaded';
        self.templateError = err;
        self.template = template;
        self.emit('template-loaded');

      });

      this.templateState = 'loading';
      goto 'loading';

  }
};

HtmlRenderer.prototype.render = (route, callback) {

  this.getTemplate(function(err, template){
    if (err) return callback(err);

    var
    var innerHtml = server.renderToSta

  });
};
