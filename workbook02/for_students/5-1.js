
function wb2_5_1 () {
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("box1canvas"));
    let context = canvas.getContext('2d');
    let list = [];


function mouseChecker(x,y,circleList) {
    circleList.forEach(function(circle) {
        // this is checking if the mouse is within the cirlce
        if ((x <= circle.x +30) && (y<=circle.y +30) && (x >= circle.x-30) && (y >= circle.y-30)) {
           // if the mouse is within the circle, we mark cirlce as onMouse
            circle.on = true;
        } else {
            circle.on = false;
        }
    });
}

function drawCircles(context,circleList) {
    circleList.forEach(function(circle){
        context.save();
        if (circle.on) {
            context.beginPath();
            context.fillStyle = "red";
            context.strokeStyle = "green";
            context.arc(circle.x, circle.y, 30, 0, 2 * Math.PI*2);
            context.fill();
            context.stroke();
        } else {
            context.beginPath();
            context.fillStyle = "blue";
            context.arc(circle.x, circle.y, 30, 0, 2 * Math.PI*2);
            context.fill();
            context.stroke();
        }
        context.restore();
    });
}

function animate() {
    // now handle the clicks on the Canvas
    canvas.onclick = function(event) {
        // we need the X,Y inside the canvas!
        // we know that event.target is a HTMLCanvasElement, so tell typescript
        let box = /** @type {HTMLCanvasElement} */(event.target).getBoundingClientRect();
            let x = event.clientX;
            let y = event.clientY;
            x -= box.left;
            y -= box.top;
            list.push({"x":x,"y":y});
    };

    canvas.onmousemove = function(event) {
        let box = /** @type {HTMLCanvasElement} */(event.target).getBoundingClientRect();
            let x = event.clientX;
            let y = event.clientY;
            x -= box.left;
            y -= box.top;                           
            mouseChecker(x, y, list);
    };
    
    drawCircles(context, list);
    window.requestAnimationFrame(animate);
}
animate();

}

window.onload = function() {
    wb2_5_1();
}
