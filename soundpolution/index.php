<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="Functions.js"></script>
	<meta charset="utf-8" />    
</head>
<body ng-app="myapp">

    <h1>Project: sound polution</h1>

    <div id="Floors" ng-controller="Circle">
        <button id="Floor0" type="button" ng-click="Bijstand(0)">Gelijkvloers</button><br/>
        <button id="Floor1" type="button" ng-click="Bijstand(1)">1st verdieping</button><br/>
        <button id="Floor2" type="button" ng-click="Bijstand(2)">2de verdieping</button><br/>
        <button id="Floor3" type="button" ng-click="Bijstand(3)">3de verdieping</button><br/>
        <button id="Floor4" type="button" ng-click="Bijstand(4)">4de verdieping</button><br/>

    </div>
    <canvas id="myCanvas" width="600" height="600" style="border:1px solid #d3d3d3;"></canvas>
    
</body>
</html>

