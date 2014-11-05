describe("marcusDancer", function() {

  var marcusDancer;
  var timeBetweenSteps = 3000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    marcusDancer = new MarcusDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(marcusDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its position change", function() {
    sinon.spy(marcusDancer, 'setPosition');
    var left = marcusDancer.left;
    var top = marcusDancer.top;
    marcusDancer.step();
    expect(marcusDancer.setPosition.called).to.be.true;
    expect(marcusDancer.left===left).to.be.false;
    expect(marcusDancer.top===top).to.be.false;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(marcusDancer, "step");
      expect(marcusDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(marcusDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(marcusDancer.step.callCount).to.be.equal(2);
    });
  });
});
