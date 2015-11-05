var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(route, cb) {
  this.routes['GET'][route] = cb;
};

Router.prototype.post = function(route, cb) {
  this.routes['POST'][route] = cb;
};

Router.prototype.put = function(route, cb) {
  this.routes['PUT'][route] = cb;
};

Router.prototype.patch = function(route, cb) {
  this.routes['PATCH'][route] = cb;
};

Router.prototype.delete = function(route, cb) {
  this.routes['DELETE'][route] = cb;
};

Router.prototype.fourOhFour = function(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.write('not found');
  res.end();
};

Router.prototype.route = function(req, res) {
  (this.routes[req.method][req.url] || this.fourOhFour)(req, res);
};
