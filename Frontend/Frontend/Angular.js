var app = angular.module("myapp", []);
var Url = "http://soundpolution-aphelloworld.rhcloud.com/index.php";

app.controller("User", function ($scope, $http)
{
    $scope.getMeting = function (verdieping)
    {
        $http.get(Url, { "verdieping": verdieping, "function": "getMetingen" })
        .success(function (res) {
            console.log(res);
            $scope.Result = res;
        });
    }

});