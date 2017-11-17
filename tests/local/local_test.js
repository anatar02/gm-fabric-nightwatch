describe("Grey Matter Fabric", function() {
  before(function(client, done) {
    done();
  });

  after(function(client, done) {
    client.end(function() {
      done();
    });
  });

  afterEach(function(client, done) {
    done();
  });

  beforeEach(function(client, done) {
    done();
  });

  it("loads the base HTML within 1000ms", function(client) {
    client
      .url("http://localhost:3000")
      .expect.element("body")
      .to.be.present.before(1000);
  });
});
