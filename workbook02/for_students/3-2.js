function workbook3_2() {
    
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));

    let myShape = canvas.getContext('2d');
    let myShape1 = canvas.getContext('2d');

    myShape.beginPath();
    
    myShape.moveTo(110,0);
    myShape.lineTo(140,70);
    myShape.lineTo(220,79);
    myShape.lineTo(160,130);
    myShape.lineTo(175,205);
    myShape.lineTo(110,170);
    myShape.lineTo(40,205);
    myShape.lineTo(55,130);
    myShape.lineTo(1,80);
    myShape.lineTo(75,70);
    myShape.lineTo(110,0);
    myShape.closePath();
    myShape.fillStyle = "red";
    myShape.strokeStyle = "green";
    myShape.lineWidth = 5;
    myShape.globalAlpha = 0.8;
    myShape.fill();
    myShape.stroke();


    myShape1.beginPath;
    
    myShape1.moveTo(150,40);
    myShape1.lineTo(180,110);
    myShape1.lineTo(260,120);
    myShape1.lineTo(200,170);
    myShape1.lineTo(215,245);
    myShape1.lineTo(150,210);
    myShape1.lineTo(80,245);
    myShape1.lineTo(95,170);
    myShape1.lineTo(41,120);
    myShape1.lineTo(115,110);
    myShape1.lineTo(150,40);

    myShape1.fillStyle = "blue";
    myShape1.strokeStyle = "green";
    myShape1.lineWidth = 5;
    myShape1.globalAlpha = 0.3;
    myShape1.fill();
    myShape1.stroke();


}

window.onload = function()
{
    workbook3_2();
}