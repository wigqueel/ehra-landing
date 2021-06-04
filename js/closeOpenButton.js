
  var btn = document.getElementById("closeOpenButton");
  
  var rot = 180;
  var closeOpen = document.getElementById("closeOpen");
  btn.addEventListener("click", function () {
   
    closeOpen.style = "transform: rotate(" + rot + "deg)";
    
    rot += 180;
  });
