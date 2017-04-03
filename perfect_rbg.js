//gets div by id from html:

var font_per_rgb = function (r, g, b) {
 
  //Counting the perceptive luminance using standard formula: 
  var font_value = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  console.log(font_value);
  return (font_value < 0.5);
}

//256 because 0 to 255 
var rgb_random = function () {
  var r = Math.floor(Math.random() * 256); 
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return [r, g, b];
};

//puts the values into r b g format
var rgb_format = function (r, g, b) {
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

//TEST CASE:Displays 10 boxes with random color and appropriate font color
for (var i = 0; i < 12; i++) 
{
  var div_box = document.createElement('div');
  div_box.setAttribute('class', 'circle');
  div_box.textContent = "Voila";
  
  var rgb = rgb_random();
  var formatted_rgb = rgb_format(rgb[0], rgb[1], rgb[2]);
  var font_rgb = font_per_rgb(rgb[0], rgb[1], rgb[2]) ? 'black' : 'white';
  
  div_box.setAttribute('style', 'background-color: ' + formatted_rgb + '; color: ' + font_rgb);
  console.log(document.getElementById('container'));
  document.getElementById('container').appendChild(div_box);
 
}