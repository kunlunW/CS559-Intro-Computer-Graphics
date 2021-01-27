// empty shell for students to do their quadcopter
// exercise

// we do enable typescript type checking - see
// https://graphics.cs.wisc.edu/Courses/559-sp2020/pages/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check

/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, esversion:6 */

window.onload = function () {
    // somewhere in your program (maybe not here) you'll want a line
    // that looks like:
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
    let context = canvas.getContext("2d");

    const wings=150;
    const wingsDimension=20;
    const wingNumber =4;
    const rotationRadius = 300;

   
    function droneAnimation(blade) {

        const bladeLength = 60;
        const bladeWidth = 10;
        blade.save();
        blade.fillStyle = "red";
        blade.fillRect(0,0,bladeLength,bladeWidth);
        blade.fillStyle = "red";
        blade.fillRect(0,0,-bladeLength,bladeWidth);
        blade.restore();
    }

    function drawDrone(context, angle){
        context.save();
        context.translate(150, 0);
        context.rotate(angle*15);
        droneBody(context, angle);
        context.restore();
        
    }

    function droneBody(context, angle) {
        var gradient = context.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "#833ab4");
        gradient.addColorStop("0.2" ,"#fd1d1d");
        gradient.addColorStop("1", "#fcb045");
        context.fillStyle = "#d203fc";
        // context.strokeStyle = "black";
        // context.lineWidth = 2;
        // context.stroke();
        context.beginPath();
        context.arc(0, 0, 60, 0, 2 * Math.PI);
        context.fill();
        context.save();

            for (let i=0; i<wingNumber; i++) {
                context.fillStyle = gradient;
                context.fillRect(0,-(wingsDimension/2),wings,wingsDimension);
                context.rotate(Math.PI/2)
            }

            context.translate(wings, 0);
            context.rotate(angle*200);
            droneAnimation(context);
            context.restore();

            context.save();
            context.translate(-wings, 0);
            context.rotate(angle*200);
            droneAnimation(context);
            context.restore();

            context.save();
            context.translate(0, wings);
            context.rotate(angle*200);
            droneAnimation(context);
            context.restore();


           context.save();
            context.translate(0, -wings);
            context.rotate(angle*150);
            droneAnimation(context);
            context.restore();
    }

   

    function drawScene() {
        let angle = performance.now()/2000;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.save();
        context.translate(rotationRadius,rotationRadius);
        context.rotate(angle*3);
        drawDrone(context, angle);
        context.restore();
        window.requestAnimationFrame(drawScene);
    }

    drawScene();

};