/*jshint esversion: 6 */
// @ts-check

import { draggablePoints } from "../libs/dragPoints.js";
import { RunCanvas } from "../libs/runCanvas.js";

/**
 * Have the array of control points for the track be a
 * "global" (to the module) variable
 *
 * Note: the control points are stored as Arrays of 2 numbers, rather than
 * as "objects" with an x,y. Because we require a Cardinal Spline (interpolating)
 * the track is defined by a list of points.
 *
 * things are set up with an initial track
 */
/** @type Array<number[]> */
let thePoints = [
  [150, 150],
  [150, 450],
  [450, 450],
  [450, 150]
];

/**
 * Draw function - this is the meat of the operation
 *
 * It's the main thing that needs to be changed
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} param
 */
function draw(canvas, param) {
  let context = canvas.getContext("2d");
  // clear the screen
  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw the control points
  function drawPoints () {
    thePoints.forEach(function(pt) {
    context.beginPath();
    context.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  });
  // now, the student should add code to draw the track and train
}



// this is a boolean value to check if the simple track button has been pressed 
let simpleChecked =  /** @type{HTMLInputElement} */ (document.getElementById("simple-track")).checked;
// this is a boolean value to check if the acr length button has been pressed 
let arclengthChecked = /** @type{HTMLInputElement} */ (document.getElementById("arc-length")).checked;
// this variable keeps track of the number of points there are in the canvas
let numPoints = thePoints.length;

let derivList = [];
let curveControl = [];
let stopLocations = [];
let distLists = [];
let speedNormalize = [];

// we need to set a proper frame per second
let fps = 1/900;

function increment(i = 0) {
  // we need to make sure that i is within the boundary
  return (i + 1) % numPoints;
}

function decrement(i = 0) {
  // we need to make sure that i is within the boundary 
  return (i - 1 + numPoints) % numPoints;
}
// calculate the derivative 
function derivCalc (i = 0, j = 0) {
  let prev = thePoints[increment(i)][j];
  let post = thePoints[decrement(i)][j]
  return (prev - post)/2;
}
    // update the derivative list 
    for (let i = 0; i < numPoints; i ++) {
      let d1 = derivCalc(i, 0);
      let d2 = derivCalc(i, 1);
      derivList[i] = [d1, d2];
    }
    // making the control points 
    function controlCurve(a = 0, b = 0, k = 5) {
      let curvacure = 10.0 / 40.0; 
      let controlPoints = curvacure * k * derivList[a][b];
      let points = thePoints[a][b] + controlPoints;
      return points;
    }
    // setting up the control points 
    for (let i = 0; i < numPoints; i ++) { 
      let curveParam = 1;
      let point1 = controlCurve(i, 0, curveParam);
      let point2 = controlCurve(i, 1, curveParam);
      let point3 = controlCurve(increment(i), 0, -curveParam);
      let point4 = controlCurve(increment(i), 1, -curveParam); 
      curveControl[i] = [point1,point2,point3,point4];
    }

    // this is a function to specify the location of the train is 
    // on the track 
    function locationSpecifier(u = 0, i = 0, j = 0) {
      let points = thePoints[i][j];
      let deriv = derivList[i][j] * u;
      let firstParam = 3;
      let secondParam =2;
      let deriv2 =  (-firstParam * thePoints[i][j] - secondParam * derivList[i][j] + 
        firstParam * thePoints[increment(i)][j] - derivList[increment(i)][j]) * u*u; 
      let deriv3 = (secondParam * thePoints[i][j] + derivList[i][j] - secondParam * thePoints[increment (i)][j] + 
      derivList[increment (i)][j]) * u * u* u;
      let position = points + deriv + deriv2 + deriv3; 
      return position;
    }

    // this is the function that calculates the speed of the train on the track 
    function speedCalc(u = 0, i = 0, j = 0) {
      let firstParam = 3;
      let secondParam = 2;
      let deriv = derivList[i][j];
      let speed1 = secondParam * (-firstParam * thePoints[i][j] - secondParam * derivList[i][j] + 
        firstParam * thePoints[increment(i)][j] - derivList[increment(i)][j]) * u; 
      let speed2 = firstParam * (secondParam * thePoints[i][j] + derivList[i][j] - secondParam * thePoints[increment(i)][j] + 
      derivList[increment(i)][j]) * u * u;
      let trueSpeed = deriv + speed1 + speed2; 
      return trueSpeed;
    }

    // Define the new parameterization
    function newLength(a = [0, 0], b = [0, 0]) {
      let pt1 = (b[0] - a[0]) * (b[0] - a[0]);
      let pt2 = (b[1] - a[1]) * (b[1] - a[1]);
      return Math.sqrt(pt1 + pt2);
    }
    
    // Draw the track and calculate the arc-length parameterization
    let distance = 0;
    let distanceSum = 0;
    let railSegment = 0;
    // we need to set a proper frame per second
    let ptsPerFrame = numPoints / fps;

    // over here, we should normalize the distance
    function acrlengthParam (pt = [1, 0], length = 1) {
        let pt1 = pt[0] * pt[0];
        let pt2 = pt[1] * pt[1];
        let param = Math.sqrt(pt1 + pt2);
        // if the acr length parameterization is 0 
        if (param == 0) {
        return [0, 0];
        }
        // otherwise, return the new parameterization 
        let newPt1 = pt[0] / param * length;
        let newPt2 = pt[1] / param * length;
        return [newPt1,newPt2];
    }


    for (let i = 0; i < ptsPerFrame; i ++) {
      // here we need to collect the stop locations
        let eachFps = fps * i;
        railSegment = Math.floor(eachFps);
        let stopPt1 = locationSpecifier(eachFps - railSegment, railSegment, 0);
        let stopPt2 = locationSpecifier(eachFps - railSegment, railSegment, 1); 
        stopLocations[i] = [stopPt1, stopPt2];
        distLists[i] = [eachFps, distanceSum];
        // we need to calculate the distance between two near stop locations
        if (i > 0) {
          let prevPt = stopLocations[i-1];
          let currPtr = stopLocations[i]; 
          distance = newLength(currPtr, prevPt);
        }
        // we also need to keep track of the total distance 
        distanceSum = distanceSum + distance;
        let speed1 = speedCalc(eachFps - railSegment, railSegment, 0);
        let speed2 = speedCalc(fps * i - railSegment, railSegment, 1);
        // we need to set up the width of the rail track 
        let length = 10; 
        // we need to use arc length param to normalize the speed
        speedNormalize[i] = acrlengthParam([speed1, speed2], length);
    }

    // if the simple track option is pressed 
    if (simpleChecked == true) {
        // we need to draw the simple curve 
        context.save();
        context.beginPath();
        context.moveTo(thePoints[0][0], thePoints[0][1]);
        for (let i = 0; i < numPoints; i ++) {
          let cp1x = curveControl[i][0];
          let cp1y = curveControl[i][1];
          let cp2x = curveControl[i][2];
          let cp2y = curveControl[i][3];
          let x = thePoints[increment(i)][0];
          let y = thePoints[increment(i)][1]; 
          context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
        }
        context.closePath();
        context.stroke();
        context.restore();
    }
    // if the simple track option is not pressed --> then we need to draw the rail road track
    else {
        // Draw the parallel tracks 
        for (let i = 0; i < ptsPerFrame - 1; i ++) {
            context.save();
            context.beginPath();
            // here we need to calculate the position of the track segment --> so need to add the position and 
            context.strokeStyle = "black";
            let pt1x = stopLocations[i][0] + speedNormalize[i][1];
            let pt1y = stopLocations[i][1] - speedNormalize[i][0];
            let pt2x = stopLocations[i + 1][0] + speedNormalize[i + 1][1];
            let pt2y = stopLocations[i + 1][1] - speedNormalize[i + 1][0];
            let pt3x = stopLocations[i][0] - speedNormalize[i][1];
            let pt3y = stopLocations[i][1] + speedNormalize[i][0];
            let pt4x = stopLocations[i + 1][0] - speedNormalize[i + 1][1];
            let pt4y = stopLocations[i + 1][1] + speedNormalize[i + 1][0]; 
            context.moveTo(pt1x, pt1y);
            context.lineTo(pt2x, pt2y);
            context.moveTo(pt3x, pt3y);
            context.lineTo(pt4x, pt4y);
            context.stroke();
            context.restore();
        }
    } 

    function segmentIncre(x = 0) {
        railSegment = 0;
        while (x > distLists[railSegment][1] && railSegment < ptsPerFrame - 1) {
          railSegment ++;
        }
        return distLists[railSegment][0];
    }

    
    // we need to set up the dimension of the track tiles 
    let x = -15;
    let y = -2.5; 
    let wid = 30;
    let hei = 5; 
    let segDist = 0;
    // here we need to draw the rail track tiles 
    // if the simple-track mode is disabled --> then we need to draw a fancier track 
    // this will include the self-adjustable arc-length parameterization 
    let tileGap = 25; 
    if (simpleChecked == false) {
        for (let i = 0; i < distanceSum - tileGap; i = i+tileGap) {
            segDist = segmentIncre(i);
            railSegment = Math.floor(segDist);
            // Draw a rectangle every 25 units of distance
            context.save();
            context.fillStyle = "#a86032";
            let tileLocation1 = locationSpecifier(segDist - railSegment, railSegment, 0);
            let tilelocation2 = locationSpecifier(segDist - railSegment, railSegment, 1); 
            context.translate(tileLocation1, tilelocation2);
            // now we need to figure out the theta value of (x,y), so we can adjust the angle of rotation 
            let baseRotation = (Math.PI) /2;
            let pt1y = speedCalc(segDist - railSegment, railSegment, 1);
            let pt1x = speedCalc(segDist - railSegment, railSegment, 0);
            let neighborRotation = Math.atan2(pt1y, pt1x);
            context.rotate(baseRotation + neighborRotation);
            context.fillRect(x, y, wid, hei);
            context.restore();
        }
    }

    drawPoints();
    // Draw the train
    let height = 15;
    let width = 10;
    for (let i = 0; i < numPoints; i ++) {
      // if the arc-length parameterization is checked, the 
        if (arclengthChecked == true) {
          let currDist = distanceSum * param / numPoints;
          let lengthApart = i * height * 2;
          let actualDist = (currDist - lengthApart + distanceSum);
          // we have to make sure that the current dist is between 0 and sum dist 
          segDist = segmentIncre(actualDist % distanceSum);
        }
        // if the acr-length is not specified --> we need to draw the track 
        else {
          segDist = (param - i * height / 100 + numPoints) % numPoints;
        }
        railSegment = Math.floor(segDist);
        // Draw the car
        context.save();
        context.fillStyle = "#34ebc9";
        let position1x = locationSpecifier(segDist - railSegment, railSegment, 0);
        let position1y = locationSpecifier(segDist - railSegment, railSegment, 1);
        context.translate(position1x, position1y);
        // we need to take into account the 
        let pt1y = speedCalc(segDist - railSegment, railSegment, 1);
        let pt1x = speedCalc(segDist - railSegment, railSegment, 0);
        let neighborRotation = Math.atan2(pt1y,pt1x);
        context.rotate(neighborRotation);
        context.strokeStyle = "black";
        context.lineWidth = 1.5;
        context.fillRect(-height, -width, 2* height, 2 * width);
        context.strokeRect(-height, -width, 2 * height, 2 * width);
        // we need to add a front to the train, we should add the front during the first iteration 
        if (i == 0) {
          let startPosi = 2.5 * height;
            context.fillStyle = "#c2bcbc";
            context.beginPath();
            context.moveTo(startPosi, 0);
            context.lineTo(-0.25 * height, 1.5 * width);
            context.lineTo(-0.25 * height, -1.5 * width);
            context.closePath();
            context.fill();
            context.stroke();
        }
        context.restore();
    }
}
/**
 * Setup stuff - make a "window.onload" that sets up the UI and starts
 * the train
 */

let oldOnLoad = window.onload;
window.onload = function() {
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    "canvas1"
  ));
  let context = canvas.getContext("2d");
  // we need the slider for the draw function, but we need the draw function
  // to create the slider - so create a variable and we'll change it later
  let slider; // = undefined;

  // note: we wrap the draw call so we can pass the right arguments
  function wrapDraw() {
    // do modular arithmetic since the end of the track should be the beginning
    draw(canvas, Number(slider.value) % thePoints.length);
  }
  // create a UI
  let runcavas = new RunCanvas(canvas, wrapDraw);
  // now we can connect the draw function correctly
  slider = runcavas.range;

  // this is a helper function that makes a checkbox and sets up handlers
  // it sticks it at the end after everything else
  // you could also just put checkboxes into the HTML, but I found this more
  // convenient
  function addCheckbox(name, initial = false) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    document.getElementsByTagName("body")[0].appendChild(checkbox);
    checkbox.id = name;
    checkbox.onchange = wrapDraw;
    checkbox.checked = initial;
    let checklabel = document.createElement("label");
    checklabel.setAttribute("for", name);
    checklabel.innerText = name;
    document.getElementsByTagName("body")[0].appendChild(checklabel);
  }
  // note: if you add these features, uncomment the lines for the checkboxes
  // in your code, you can test if the checkbox is checked by something like:
  // document.getElementById("simple-track").checked
  // in your drawing code
  //
  // lines to uncomment to make checkboxes
  addCheckbox("simple-track",false);
  addCheckbox("arc-length",true);
  addCheckbox("bspline",false);

  // helper function - set the slider to have max = # of control points
  function setNumPoints() {
    runcavas.setupSlider(0, thePoints.length, 0.05);
  }

  setNumPoints();
  runcavas.setValue(0);

  // add the point dragging UI
  draggablePoints(canvas, thePoints, wrapDraw, 10, setNumPoints);
};
