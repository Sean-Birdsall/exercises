angular.module('myApp', [])
    .controller('mainController', mainController);
    
function mainController() {
    
    var main = this;
    
    main.monkeys = [
       'Koko',
       'Casey',
       'Harambe',
       'Cheeta'
       ];
       
       
}