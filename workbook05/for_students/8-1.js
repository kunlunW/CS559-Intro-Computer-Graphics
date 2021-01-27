// @ts-check
/* jshint -W069, esversion:6 */

import { draggablePoints } from "../libs/dragPoints.js";

window.onload = function() {
  /** @type {HTMLCanvasElement} */
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    "canvas1"
  ));
  // get the context 
  let context = canvas.getContext("2d");

  let thePoints = [
    [100, 100],
    [150,50],
    [200, 100],
    [200, 200],
    [150,250],
    [100, 200],
  ];

  function draw() {
    // we need to clear the canvas first 
    context.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < thePoints.length; i++){
      // begin path 
      context.save()
      context.beginPath();
      // the position of the cirlce
      var position1 = thePoints[i][0];
      var position2 = thePoints[i][1]
      // we need to draw a circle for each vertex
      context.fillStyle = "blue";
      context.arc(position1,position2,10,0,2*Math.PI);
      context.fill();
      context.closePath();
      context.restore();

      // we need a draw lines to connect points/dots
      context.save();
      context.beginPath();
      // setting up the line width
      context.lineWidth = 5;
      context.strokeStyle = "red";
      context.moveTo(position1,position2);
      if(i == thePoints.length-1) {
        context.lineTo(thePoints[0][0],thePoints[0][1]);
      } 
      else {
        context.lineTo(thePoints[i+1][0],thePoints[i+1][1]);
      }
      context.stroke();
      context.restore();
      context.closePath();
    }
  }
  draggablePoints(canvas, thePoints, draw);
  draw();
};