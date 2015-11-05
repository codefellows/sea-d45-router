var expect = require('chai').expect;
var Router = require(__dirname + '/../lib/router');

describe('sea d45 router', function() {
  beforeEach(function() {
    this.router = new Router();
  });

  it('should be a router', function() {
    expect(this.router.routes).to.have.property('GET');
    expect(this.router.routes).to.have.property('POST');
    expect(this.router.routes).to.have.property('PUT');
    expect(this.router.routes).to.have.property('PATCH');
    expect(this.router.routes).to.have.property('DELETE');
  });
});
