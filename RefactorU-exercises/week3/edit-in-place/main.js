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
        
        // Reference the element that was clicked
        var clickedElement = $event.currentTarget.nodeName;
        switch (clickedElement){
            case 'H3':
                main.editingName = true;
                console.log(document.getElementById('head3'));
                break;
            case 'SPAN':
                // There is two span elements so we need to figure out which one is which
                var clickedListItem = $event.currentTarget.getAttribute('id');
                if (clickedListItem === 'age'){
                    main.editingAge = true;
                } else if (clickedListItem === 'occ') {
                    main.editingOcc = true;
                }
                break;
            case 'P':
                main.editingBio = true;
        }
    }
    // Function to hide inputs and change the default text to the ng-model on inputs
    main.blurName = function($event) {
        var blurredElement = $event.currentTarget.getAttribute('name');
        console.log(blurredElement);
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