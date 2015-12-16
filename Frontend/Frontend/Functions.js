var ctx;
window.onload = function ()
{
    var c = document.getElementById("myCanvas");
    var img = document.getElementById("Floor");
    ctx = c.getContext("2d");  
    ctx.drawImage(img, 10, 10);

    var xinkom = 650;
    var yinkom = 850;
    var xcaf = 777;
    var ycaf = 335;
    var xlounge = 450;
    var ylounge = 400;    
    var radius = 40;
    var decibelsinkom = 20;
    var decibelscaf = 60;
    var decibelslounge = 95;

    drawCircle(xinkom, yinkom, radius, decibelsinkom)
    drawCircle(xcaf, ycaf, radius, decibelscaf)
    drawCircle(xlounge, ylounge, radius, decibelslounge)
    
    

    
}

function drawCircle( x, y, radius, decibels)
{
    var centerX = x / 2;
    var centerY = y / 2;

    ctx.beginPath();
    ctx.globalAlpha = 0.25;
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    var col;
    if (decibels >= 30 && decibels <= 60)
    {
        col = "green";
    }
    else if (decibels >= 60 && decibels <= 90)
    {
        col = "orange";
    }
    else if (decibels >= 90 && decibels <= 120)
    {
        col = "red";
    }

    ctx.fillStyle = col;
    ctx.fill();
    ctx.globalAlpha = 1;
}