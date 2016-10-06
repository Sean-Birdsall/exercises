angular.module('myApp', [])
    .controller('appCtrl', appController)
    
function appController() {
    
    var main = this;
    // Declare default profile information
    main.defName = "Name";
    main.defAge = "Age";
    main.defOcc = "Occupation";
    main.defBio = "About me...";
    // Set these to false to to hide inputs unless they are being edited
    main.editingName = false;
    main.editingAge = false;
    main.editingOcc = false;
    main.editingBio = false;
    
    // Function to hide text when being edited
    main.hideText = function($event) {
        
        // Reference the element node that was clicked
        var clickedElementNode = $event.currentTarget.nodeName;
        
        switch (clickedElementNode){
            case 'H3':
                main.editingName = true;
                // In order to reference the input to give it focus, I had to add a delay to let it be 
                // written to the DOM....I guess???
                main.delayNameGrab = function(){
                    main.clickedInput = document.getElementsByName('name')[0];     
                    main.clickedInput.focus();
                }
                var timeoutID = window.setTimeout(main.delayNameGrab, 0);
                
                break;
            case 'SPAN':
                // There is two span elements so we need to figure out which one is which
                var clickedListItem = $event.currentTarget.getAttribute('id');
                if (clickedListItem === 'age'){
                    main.editingAge = true;
                    // Having to do a seperate function for each case annoys me
                    main.delayAgeGrab = function(){
                    main.clickedInput = document.getElementsByName('age')[0];     
                    main.clickedInput.focus();
                }
                timeoutID = window.setTimeout(main.delayAgeGrab, 0);
                } else if (clickedListItem === 'occ') {
                    main.editingOcc = true;
                    // Having to do a seperate function for each case annoys me
                    main.delayOccGrab = function(){
                    main.clickedInput = document.getElementsByName('occ')[0];     
                    main.clickedInput.focus();
                }
                timeoutID = window.setTimeout(main.delayOccGrab, 0);
                }
                break;
            case 'P':
                main.editingBio = true;
                // Having to do a seperate function for each case annoys me
                    main.delayBioGrab = function(){
                    main.clickedInput = document.getElementsByName('bio')[0];     
                    main.clickedInput.focus();
                }
                timeoutID = window.setTimeout(main.delayBioGrab, 0);
        }
    }
    // Function to hide inputs and change the default text to the ng-model on inputs
    main.blurName = function($event) {
        // Reference which element is being blurred by name of each element
        var blurredElement = $event.currentTarget.getAttribute('name');
        // Switch statement to take appropriate action depending on which element is being blurred
        switch (blurredElement){
            case 'name':
                main.editingName = false;
                main.defName = main.name;
                break;
            case 'age':
                main.editingAge = false;
                main.defAge = main.age;
                break;
            case 'occ':
                main.editingOcc = false;
                main.defOcc = main.occ;
                break;
            case 'bio':
                main.editingBio = false;
                main.defBio = main.bio;
        }
    }
    
    
}