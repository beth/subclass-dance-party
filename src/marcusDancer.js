var MarcusDancer = function(top, left, timeBetweenSteps){

    this.stepSize = 0.01;
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('marcus');
    this.$node.mouseover(function (event){
      this.timeBetweenSteps *= 0.5;
    }.bind(this));

};

MarcusDancer.prototype = Object.create(Dancer.prototype);
MarcusDancer.prototype.constructor = MarcusDancer;

MarcusDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.top += this.stepSize*($("body").height() * (Math.random()-.5));
  this.left += this.stepSize*($("body").width() * (Math.random()-.5));
  this.setPosition();
};
