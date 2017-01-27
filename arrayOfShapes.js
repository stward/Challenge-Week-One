// var makeShape = require('./shapes');

var shapes = ["circle", "ellipses", "stadium", "arch", "annulus", "equilateral", "parallelogram", "pentagon", "octagon"];
var colors = ["red", "blue", "yellow", "orange", "green", "purple", "green"];
var sides = [1, 3, 5, 7, 9, 11];


var sillyShapes = [];

function makeSillyShapes(){

  for (var i = 0; i < 10; i++) {
    // Use your shape constructor function to build 10 random shapes.

    // Figure out how to grab a random item from the array, in order to get a shape, color, and sides
    // for the constructor

    //Dont forget to push your newly made shape into your sillyShapes array.

    var randShape = shapes[Math.floor(Math.random() * shapes.length)];
    var randSides = sides[Math.floor(Math.random() * sides.length)];
    var randColor = colors[Math.floor(Math.random() * colors.length)];

    var newShape = new MakeShape(randShape, randSides, randColor);
    sillyShapes.push(newShape);
  }
  return sillyShapes;
}

makeSillyShapes();



function renderShapesToHTML() {
  // You will need to loop through the sillyShapes array
  // and append the HTML to the UL.
  var s = sillyShapes;
  for (var i = 0; i < s.length; i++) {
    $("#silly-shapes-list").append("<li>I am a " + s[i].color + " " + s[i].name + " with " + s[i].sides + " sides!</li>");
  }
}

renderShapesToHTML();
