//Modified from P5 example at: https://p5js.org/examples/dom-video-capture.html
//delay function https://github.com/processing/p5.js/issues/1068
var capture;
var division = 100
var factor = 5
var c = 1
function setup() {
  createCanvas(320, 240);
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}
function delay(ms) {
var cur_d = new Date();
var cur_ticks = cur_d.getTime();
var ms_passed = 0;
while(ms_passed < ms) {
var d = new Date(); // Possible memory leak?
var ticks = d.getTime();
ms_passed = ticks - cur_ticks;
// d = null; // Prevent memory leak?
}
}


function draw() {
  var words = [ 4, 8, 12, 16, -4, -8, -12, -16 ];
var word = random(words);  // select random word
 var hs = [ 1,2,3];
var h = random(hs);  // select random word

var z = floor(random(1, 1));  // select random number
  
  image(capture, 0, 0, 320, 240);
  loadPixels();
  
  if(z===1){
    while(c<=division){
    var word = random(words);  // select random number
  for(var i=(pixels.length/division)*(c-1);i<=(pixels.length/division)*c;i+=12) {

 
   
      pixels[i] = pixels[i+word*factor]; //red
      pixels[i+1] = pixels[i+1+word*factor]; //green
      pixels[i+2] = pixels[i+2+word*factor]; //blue
      
     
 
  }
  
  c+=1
    }
    
    c= 1
    
    
  }
  
  else{
    for(var i=0;i<pixels.length;i+=16) {
    if(pixels[i] > 0) { //if amount of red in a pixel is high enough, add yellow highlights
       pixels[i] = pixels[i+word]; //red
      pixels[i+1] = pixels[i+1+word]; //green
      pixels[i+2] = pixels[i+2+word]; //blue
     
      
    };
  }
  }
  
  updatePixels();
console.log(c)
delay(5)
}



