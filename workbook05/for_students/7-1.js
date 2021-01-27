

// @ts-check
/* jshint -W069, esversion:6 */

/**
 * drawing function for box 1
 *
 * draw the spiral - account for the checkbox and slider
 **/

window.onload = function() {
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
    /** @type{HTMLInputElement} */ let slider = (/** @type{HTMLInputElement} */ document.getElementById("slider1"));
    /** @type{HTMLInputElement} */ let cb = (/** @type{HTMLInputElement} */ document.getElementById("checkbox1"));
    let context = canvas.getContext("2d");

    function draw() {
        // first we need to clear up the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // we need to record the current value of the range slider, that 
        // will tell us how many rectangles we need to draw
        
        var checkBoxStatus = 0;
        var recNumber = 0;
        var centerX = canvas.width / 2 ;
        var centerY = canvas.height / 2;
        let oriX = 200;
        let oriY = 200;
        let u = 0;
        recNumber = Number(slider.value);
        // we need to check the status of the checkBox, if it is checked,
        // then we assign 1 to checkBoxStatus
        if (cb.checked==true) {
            checkBoxStatus =1;
        }
        else {
            checkBoxStatus = 0;
        }
        // now we can begin drawing
        context.moveTo(centerX,centerY);
        for(let i = 0; i < recNumber; i++){
            context.save();
            context.beginPath();
            context.fillStyle = "Blue";
            // we can use the provided formula to spread out all the triangles
            let[x,y] = [200+u*180*Math.cos(2*Math.PI*4*u),200+u*180*Math.sin(2*Math.PI*4*u)];
            context.translate(x,y);
            context.arc(0,0,1,0,Math.PI*2);
            context.fill();
            context.closePath();
            context.restore();
            // so the checkbox is pressed, which means that we need to connect 
            // all the dots we have
            if(checkBoxStatus == 1){
                context.moveTo(x,y);
                context.lineTo(oriX,oriY);
                context.strokeStyle = "Blue";
                context.stroke();
                oriX = x;
                oriY = y;
            }
            u = u + 1/recNumber;
        }
        window.requestAnimationFrame(draw);
    }
    draw();
};