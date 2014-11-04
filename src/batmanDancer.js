var BatmanDancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = 3000;
  Dancer.call(this, top, left, this.timeBetweenSteps);
  this.$node.addClass('batman');
};

BatmanDancer.prototype = Object.create(Dancer.prototype);
BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeIn(this.timeBetweenSteps/2).fadeOut(this.timeBetweenSteps/2);
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.setPosition();
};
