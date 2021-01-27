function fireWorkExample() {

let cirlce = [];
let squares = [];

function drawCircles(context,circleList) {
    circleList.forEach(function(circle){
        context.save();
        context.beginPath();
        context.fillStyle = "red";
            context.strokeStyle = "green";
            context.arc(circle.x, circle.y, 10, 0, 2 * Math.PI);
            context.fill();
            context.stroke();
            context.closePath();


    }


});



}