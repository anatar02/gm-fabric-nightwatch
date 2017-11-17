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

  xit("has the title Grey Matter", function(client) {
    client
      .url("http://localhost:3000")
      .expect.element("title")
      .text.to.equal("Grey Matter Fabric");
  });

  it("renders the virtual DOM within 5000ms", function(client) {
    client
      .url("http://localhost:3000")
      .expect.element("div[class^='AppContainer-']")
      .to.be.present.before(5000);
  });

  it("renders the default codesplit scene within 5000ms", function(client) {
    client
      .url("http://localhost:3000")
      .expect.element("div[class^='GMServiceViewContainer-']")
      .to.be.present.before(5000);
  });

  it("select the All Services TabLink as active by default", function(client) {
    client
      .url("http://localhost:3000")
      .expect.element("[class^='TabLink-'].active > [class^='TabTitle-'] > h1")
      .text.to.equal("All Services");
  });

  it("renders the Card button as active by default", function(client) {
    client
      .url("http://localhost:3000")
      .expect.element("div[class^='ToolbarCenter-'] > button.active")
      .to.have.attribute("title")
      .equals("Card");
  });

  it("renders the Card view by default", function(client) {
    client
      .url("http://localhost:3000")
      .expect.element("div[class^='GMServiceCardView-']")
      .to.be.present.before(5000);
  });

  xit("groups the microservices by status by default");
  xit("sorts the microservices by name by default");

  xit(
    "only shows microservices in the down status when the Down Tab Item is clicked"
  );
  xit(
    "only shows microservices in the warning status when the Warning Tab Item is clicked"
  );
  xit(
    "only shows microservices in the stable status when the Stable Tab Item is clicked"
  );
  xit("hides the Sort select when Down, Warning or Stable is selected");
  xit("renders the List View when the List button is clicked");
  xit("filters the microservices based on test entered in the search field");
  xit(
    "persists search queries, card/list state, groupBy, and sortBy state to the URL"
  );
});
