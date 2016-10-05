angular.module('profileEdit', [])
    .controller('mainController', mainController);
    
function mainController() {
    
    var main = this;
    main.hidden = true;
    main.editInfo = function() {
        console.log("WTF");
        main.hidden = false;
    }
    
}
        
    
        
  