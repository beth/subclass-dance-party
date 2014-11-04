// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  //data-id: i
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.active = true;
  this.setPosition();
  this.step();
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if(this.active){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.dance = function(){
  this.active = true;
  this.step();
}

Dancer.prototype.lineUp = function(){
  this.top = 0;
  this.active = false;
  this.setPosition();
};

Dancer.prototype.closestNeighbors = function(n){
  var x;
  var y;
  var closeDancers = [];
  for(var i = 0;i<window.dancers.length;i++){
    x = window.dancers[i].left;
    y = window.dancers[i].top;
    var result = Math.pow(this.top - y,2) + Math.pow(this.left - x,2)
    result = Math.sqrt(result);
    closeDancers.push({
      dist: result,
      left: x,
      top: y
    });
  }
  closeDancers = closeDancers.sort(function (a, b) {
    if (a.dist > b.dist) {
      return 1;
    }
    if (a.dist < b.dist) {
      return -1;
    }
  // a must be equal to b
  return 0;
  }).splice(1,n);

  return closeDancers;
};

Dancer.prototype.faster = function(){
  this.timeBetweenSteps *= 2;
}

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
