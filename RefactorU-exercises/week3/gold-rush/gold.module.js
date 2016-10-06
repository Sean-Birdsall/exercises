angular.module("mapApp", []);

angular.module("mapApp")
  .controller('mapController', mapController);

function mapController(){

  var main = this;

  main.markMap = function(event){

    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var coor = "X coords: " + x + ", Y coords: " + y;

    var image_element = document.createElement("img");
    var currentDiv = document.getElementById("mycontainer");

    currentDiv.appendChild(image_element);

    var srcAttrib = document.createAttribute("src");
    srcAttrib.value = "pin.png";

    var styleAttrib = document.createAttribute("style");
    var myAttribs = `position:absolute; top:${y}px; left:${x}px; width:30px`;

    // var myAttribs = {
    //   "position": "absolute",
    // 	"top": x +"px",
    // 	"left": y +"px",
    // 	"width": "30px"
    // }
    console.log(myAttribs);
    styleAttrib.value = myAttribs;

    image_element.setAttributeNode(srcAttrib);
    image_element.setAttributeNode(styleAttrib);

  }

}