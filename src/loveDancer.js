var LoveDancer = function(top, left, timeBetweenSteps){

  this.contributors = 5;
  this.attraction = 0.1;
  Dancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('love');
};

LoveDancer.prototype = Object.create(Dancer.prototype);
LoveDancer.prototype.constructor = LoveDancer;


LoveDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var totX = 0;
  var totY = 0;
  var neighbors = this.closestNeighbors(this.contributors);
  for( var i = 0; i< neighbors.length;i++){
    totX += neighbors[i].left;
    totY += neighbors[i].top;
  }
  totX = totX/this.contributors;
  totY = totY/this.contributors;

  this.left += this.attraction *(totX - this.left);
  this.top += this.attraction * (totY - this.top);
  this.setPosition(this.left,this.top);
};


