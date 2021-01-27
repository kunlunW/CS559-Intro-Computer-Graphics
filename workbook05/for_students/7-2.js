// @ts-check
/* jshint -W069, esversion:6 */

/**
 * drawing function for box 2
 * 
 * draw a picture using curves!
 **/
window.onload = function() {
  /** @type {HTMLCanvasElement} */
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
  let context = canvas.getContext("2d");
  
  context.lineWidth = 5;
  context.fillStyle = "red";
  context.strokeStyle = "red";
  context.beginPath();
  context.beginPath();
  context.moveTo(175,140);    
  context.bezierCurveTo(177,134,173,127,154,127);
  context.bezierCurveTo(123,127,123,164,122,164);
  context.bezierCurveTo(122,182,141,203,176,222);
  context.bezierCurveTo(211,203,232,181,231,164);
  context.bezierCurveTo(231,163,231,125,201,126);
  context.bezierCurveTo(186,126,177,138,176,142);
  context.closePath();
  context.fill();
  context.stroke();
};