const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button

if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}


dragElement(document.getElementById("visuals"));
dragElement(document.getElementById("visuals2"));
dragElement(document.getElementById("visuals3"));
dragElement(document.getElementById("visuals4"));
dragElement(document.getElementById("visuals5"));
dragElement(document.getElementById("visuals6"));
dragElement(document.getElementById("visuals7"));
dragElement(document.getElementById("visuals8"));


 function display() {
            document.getElementById("marq1").style.fontFamily = "courier new, sans-serif";
         }

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    //on startup, setting elements size based off of its location
    var distFromMidX = Math.abs(elmnt.offsetLeft-(window.innerWidth / 2))+45; 
    var distFromMidY = Math.abs(elmnt.offsetTop-(window.innerHeight / 2))+45;
    var imgSize = (distFromMidX+distFromMidY)/1.9;
    elmnt.style.width = (imgSize)+'px';
    elmnt.style.height =(imgSize)+'px';
  if (document.getElementById(elmnt.id)) {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    //const isDragging = dragMouseDown && (e.movementX || e.movementY);
   // document.body.classList.toggle("drag", isDragging);
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //warps the width and length of each individual image based on its distance away from the center of the screen
    //further from center=larger
    var distFromMidX = Math.abs(elmnt.offsetLeft-(window.innerWidth / 2))+45; 
    var distFromMidY = Math.abs(elmnt.offsetTop-(window.innerHeight / 2))+45;
    var imgSize = (distFromMidX+distFromMidY)/1.9;
    //setting elements new size based on position (distance from middle of screen)
    elmnt.style.width = (imgSize)+'px';
    elmnt.style.height =(imgSize)+'px';
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;

  }
}

/*function randomFont(marq2){
 // var arrLength=2; //length of fontArray, not needed
  //const Fonts = new Array('Times New Roman', 'Helvetica', 'Arial');
 // var randNumb = Math.floor(Math.random() * 3); //random number from 1-2
  marq1.style.fontfamily = 'Helvetica';
}fuck this fucking bullshit fucker */ 

/*

var ddragElement = null;
document.addEventListener("mousedown", e =>
{
  ddragElement = e.target;
});

document.addEventListener("mouseup", e =>
{
  ddragElement = null;
});

document.addEventListener("mousemove", e =>
{
  const isDragging = ddragElement && (e.movementX || e.movementY);
  document.body.classList.toggle("drag", isDragging);
  if (isDragging)
  {
    console.log("dragging", ddragElement);
  }
});

document.body.appendChild(document.createElement("canvas"));

*/
//end of draggable images page

