var ctx;
var img;
window.onload = function () {
    var c = document.getElementById("myCanvas");
    img = new Image();
    img.src = "Images/Gelijkvloors.jpg";
    ctx = c.getContext("2d");
}

function Draw(bck, decibels)
{
    clear();
    img.src = bck;
    ctx.drawImage(img, 10, 10);
    var arr = [["Refter","green"], "Inkom", "Lounge"];
    arr.forEach(DrawCircle);

    /*var col;

    if (decibels >= 30 && decibels <= 60) {
        col = "green";
    }
    else if (decibels >= 60 && decibels <= 90) {
        col = "orange";
    }
    else if (decibels >= 90 && decibels <= 120) {
        col = "red";
    }

    ctx.fillStyle = col;
    ctx.fill();
    ctx.globalAlpha = 1;*/
}

function DrawCircle(value, index, ar)
{  
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    if (value == "Refter")
        {
        p = new Point(775, 335);
        ctx.arc((p.x/2), (p.y/2), 45, 0, 2 * Math.PI);
        }
    else if (value == "Lounge")
        {
        p = new Point(450, 400);
        ctx.arc((p.x / 2),(p.y/2), 45, 0, 2 * Math.PI);
        }
   else if (value == "Inkom")
        {
        p = new Point(650, 850);
            ctx.arc((p.x / 2), (p.y / 2),45 , 0, 2 * Math.PI);
        }
    else if(value == "OLC")
        p = new Point(175, 650);
  else  if (value == "Gang")
        p = new Point(650, 850);
    else p = new Point(0, 0);

   
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.closePath();
}

function Point(x, y)
{
    this.x = x;
    this.y = y;
 }

function clear()
{
    var c = document.getElementById("myCanvas");
    ctx = c.getContext("2d"); 
    ctx.clearRect(0, 0, c.width, c.height);
}