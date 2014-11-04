var MarcusDancer = function(top, left, timeBetweenSteps){

    Dancer.call(this,top, left, timeBetweenSteps);
    this.top = top;
    this.left = left;

};

MarcusDancer.prototype = Object.create(Dancer.prototype);
MarcusDancer.prototype.constructor = MarcusDancer;


MarcusDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  this.top += 0.01*($("body").height() * (Math.random()-.5));
  this.left += 0.01*($("body").width() * (Math.random()-.5));
  this.setPosition(this.top,this.left);
};
