function MakeShape(name, sides, color) {
  this.name = name;
  this.sides = sides;
  this.color = color;
}

MakeShape.prototype.getInfo = function () {
  return "I am a " + this.color + " " + this.name + " with " + this.sides + " sides!";
};

MakeShape.prototype.updateColor = function (newColor) {
  this.color = newColor;
  var obj = {};
  obj.name = this.name;
  obj.sides = this.sides;
  obj.color = this.color;
  return obj;
};

// module.exports = MakeShape;
