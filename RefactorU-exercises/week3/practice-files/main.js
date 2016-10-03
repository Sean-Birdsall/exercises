angular.module('myApp', []);

angular.module('myApp')
    .controller('mainController', mainController);
        mainController.$inject = ['$scope'];
        
function mainController($scope) {
    $scope.greeting = 'Hello Squirrels!';
}