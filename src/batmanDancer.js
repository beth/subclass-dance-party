var BatmanDancer = function(top, left, timeBetweenSteps){

    Dancer.call(this,top, left, timeBetweenSteps);
    this.$node.addClass('batman')

};

BatmanDancer.prototype = Object.create(Dancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;


BatmanDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  this.$node.fadeToggle();
};
