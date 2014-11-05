describe("batmanDancer", function() {

  var batmanDancer;
  var timeBetweenSteps = 3000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    batmanDancer = new BatmanDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(batmanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fade in and out", function() {
    sinon.spy(batmanDancer.$node, 'fadeIn');
    sinon.spy(batmanDancer.$node, 'fadeOut');
    batmanDancer.step();
    expect(batmanDancer.$node.fadeIn.called).to.be.true;
    expect(batmanDancer.$node.fadeOut.called).to.be.true;
  });

  it("should have a step function that makes its position change", function() {
    sinon.spy(batmanDancer, 'setPosition');
    var left = batmanDancer.left;
    var top = batmanDancer.top;
    batmanDancer.step();
    expect(batmanDancer.setPosition.called).to.be.true;
    expect(batmanDancer.left===left).to.be.false;
    expect(batmanDancer.top===top).to.be.false;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(batmanDancer, "step");
      expect(batmanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(batmanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(batmanDancer.step.callCount).to.be.equal(2);
    });
  });
});
