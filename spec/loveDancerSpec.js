describe("loveDancer", function() {

  var loveDancer;
  var timeBetweenSteps = 3000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    loveDancer = new LoveDancer(10, 20, timeBetweenSteps);
    window.dancers = [];
  });

  it("should have a jQuery $node object", function(){
    expect(loveDancer.$node).to.be.an.instanceof(jQuery);
  });
/*
  it("should have a step function that makes its position change", function() {
    sinon.spy(loveDancer, 'setPosition');
    var left = loveDancer.left;
    var top = loveDancer.top;
    loveDancer.step();
    expect(loveDancer.setPosition.called).to.be.true;
    expect(loveDancer.left===left).to.be.false;
    expect(loveDancer.top===top).to.be.false;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(loveDancer, "step");
      expect(loveDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(loveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(loveDancer.step.callCount).to.be.equal(2);
    });
  });*/
});

