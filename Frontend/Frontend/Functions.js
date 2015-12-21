var url = "http://soundpolution-aphelloworld.rhcloud.com";
var app = angular.module("myapp", []).config(function ($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller("Circle", function ($scope, $http)
{
    $scope.Bijstand = function (Verdiep) {
       $http.get(url + "?function=getMetingen&Verdieping="+Verdiep)
        .success(function (Result) {
            console.log(Result);
        });
    }
});


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
    var arr = [["Refter",45], ["Inkom",83], ["Lounge",100]];
    arr.forEach(DrawCircle);
}

function DrawCircle(value, index, ar)
{  
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    if (value[0] == "Refter")
    {
        p = new Point(775, 335);
        ctx.arc((p.x / 2), (p.y / 2), 45, 0, 2 * Math.PI);
        defineColor(value[1]);
    }
    else if (value[0] == "Lounge")
    {
        p = new Point(450, 400);
        ctx.arc((p.x / 2), (p.y / 2), 45, 0, 2 * Math.PI);
        defineColor(value[1]);
    }
    else if (value[0] == "Inkom") {
        p = new Point(650, 850);
        ctx.arc((p.x / 2), (p.y / 2), 45, 0, 2 * Math.PI);
        defineColor(value[1]);
    }
    else if (value[0] == "OLC") {
        p = new Point(175, 650);
        ctx.arc((p.x / 2), (p.y / 2), 45, 0, 2 * Math.PI);
        defineColor(value[1]);
    }
    else if (value[0] == "Gang") {
        p = new Point(650, 850);
        ctx.arc((p.x / 2), (p.y / 2), 45, 0, 2 * Math.PI);
        defineColor(value[1]);
    }
    else alert("No valid measurements are known");
   
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

function defineColor(c)
{
    var col;

    if (c <= 60)
        col = "green";
    else if (c >= 60 && c <= 90)
        col = "orange";
    else if (c >= 90)
        col = "red";

    ctx.fillStyle = col;
    ctx.fill();
    ctx.globalAlpha = 1;
}