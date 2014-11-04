var BatmanDancer = function(top, left, timeBetweenSteps){
    this.timeBetweenSteps = 3000;
    Dancer.call(this,top, left, this.timeBetweenSteps);
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
  this.$node.fadeToggle(this.timeBetweenSteps/2).fadeToggle(this.timeBetweenSteps/2);
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.setPosition(this.top,this.left)
};
