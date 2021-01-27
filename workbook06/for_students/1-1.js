// @ts-check
/* jshint -W069, esversion:6 */

/**
 * drawing function for box 1
 *
 * draw something.
 **/
window.onload = function() {
  /** @type {HTMLCanvasElement} */
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    "canvas1"
  ));

  let context = canvas.getContext("2d");

  // change this to draw a more complex context that meets the requirement
  function path() {

   context.beginPath();

   context.fillStyle = "blue";

var startingX = 22, startingY = 143, firstX = 84, firstY = 91, secondX = 121, secondY = 73, endingX = 178, endingY = 125;

context.moveTo( startingX, startingY );
context.bezierCurveTo( firstX, firstY, secondX, secondY, endingX, endingY );

context.moveTo( startingX, startingY )
context.bezierCurveTo( firstX, firstY, secondX - 156, secondY + 17, endingX - 125, endingY - 54 );

context.moveTo( startingX + 62, startingY - 75 )
context.bezierCurveTo( firstX + 8, firstY + 171, secondX - 85, secondY + 15, endingX - 125, endingY - 54 );

context.moveTo( startingX + 62, startingY - 75 )
context.bezierCurveTo( firstX + 43, firstY + 180, secondX - 51, secondY + 8, endingX - 9, endingY - 85 );

context.moveTo( startingX + 156, startingY - 19 )
context.bezierCurveTo( firstX + 142, firstY + 231, secondX - 47, secondY + 24, endingX - 9, endingY - 85 );
  }

  context.beginPath();
  path();
  context.fill('evenodd');           // change this to one rule

  context.save();

  context.translate(200,0);
  context.beginPath();
  path();
  context.fill('nonzero');          // change this to use a filling rule
};
