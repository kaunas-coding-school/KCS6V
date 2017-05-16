app.controller('meniuController', function($scope) {
    $scope.currentNavItem = 'page1';

    $scope.isSet = function(tabNum){
        return $scope.currentNavItem === tabNum;
    };
});