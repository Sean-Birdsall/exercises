var myApp = angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function($scope) {
        
        $scope.myFunc = function() {
            $scope.someText = 'Hello Squirrels!';
        };
        
        $scope.revealList = function () {
            $scope.squirrelList = ['Albino Squirrel', 'Regular Squirrel', 'Dramatic Squirrel', 'Squirrel on WaterSkis'];
        }
        
        $scope.addPoint = function() {
            $scope.heading = document.getElementById('head1');
            $scope.heading.innerHTML = $scope.heading.innerHTML + '!'; 
        }
        
        $scope.addPoint2 = function() {
            $scope.heading = document.getElementById('head2');
            $scope.heading.innerHTML = $scope.heading.innerHTML + '!'; 
        }
        
        $scope.remove = function() {
            this.html('');
        }
        
        $scope.getConfirm = function() {
            var x = document.getElementById('espnLink');
            var retVal = confirm("Did you want to go to: " + x.href);
            
            if (!retVal) {
                event.preventDefault();
                x.remove();
            }
        }
        
        $scope.getConfirm2 = function() {
            var x = document.getElementById('nflLink');
            var retVal = confirm("Did you want to go to: " + x.href);
            
            if (!retVal) {
                event.preventDefault();
                x.remove();
            }
        }
        
    }]);