function workbook3_1() {
    
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));

    let myShapes = canvas.getContext('2d');
    myShapes.beginPath();
    myShapes.arc(100, 60, 30, 0, 2* Math.PI);
    myShapes.fillStyle = 'pink';
    myShapes.strokeStyle = 'DarkMagenta';
    myShapes.lineWidth = 5;
    myShapes.fill();
    myShapes.stroke();

    myShapes.beginPath();
    myShapes.arc(230, 60, 30, Math.PI/2, -Math.PI/2, false)
    myShapes.arc(300, 60, 30, -Math.PI/2, Math.PI/2, false)
    myShapes.lineTo(230, 90);
    myShapes.fillStyle = 'pink';
    myShapes.strokeStyle = 'darkred';
    myShapes.lineWidth = 5;
    myShapes.fill();
    myShapes.stroke();

    myShapes.beginPath();
    myShapes.moveTo(100, 120);
    myShapes.lineTo(130, 170);
    myShapes.lineTo(70, 170);
    myShapes.closePath();
    myShapes.fillStyle = 'gold';
    myShapes.strokeStyle = 'DarkGoldenRod';
    myShapes.lineWidth = 5;
    myShapes.fill();
    myShapes.stroke();

    myShapes.beginPath();
    myShapes.moveTo(230, 110);
    myShapes.lineTo(265, 140);
    myShapes.lineTo(300, 110);
    myShapes.lineTo(335, 140);
    myShapes.lineTo(335, 170);
    myShapes.lineTo(195, 170);
    myShapes.lineTo(195, 140);
    myShapes.closePath();
    myShapes.fillStyle = 'grey';
    myShapes.strokeStyle = 'black';
    myShapes.lineWidth = 5;
    myShapes.fill();
    myShapes.stroke();
    
}

window.onload = function()
{
    workbook3_1();
}