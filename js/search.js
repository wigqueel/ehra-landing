(function () {
  var x = document.getElementById("searchInputTwo");
  var divBorder = document.getElementById("toolsTwo");
  var searchTool = document.getElementsByClassName("searchTool")[0];
  console.log(divBorder);
  if (x.style.display != "none") {
    x.style.display = "none";
    divBorder.style.border = "none";
  } else {
    x.style.display = "block";
    searchTool.style.top = "10px";
    divBorder.style.borderBottom = "2px solid white";
  }
})();

(function () {
    var divBorder = document.getElementById("tools");
    divBorder.style.borderBottom = "2px solid white";
  }
)();

function searchInput() {
  var x = document.getElementById("searchInput");
  var divBorder = document.getElementById("tools");
  if (x.style.display != "none") {
    x.style.display = "none";
    divBorder.style.border = "none";
  } else {
    divBorder.style.borderBottom = "2px solid white";
    x.style.display = "block";
  }
}

function searchInputTwo() {
  var x = document.getElementById("searchInputTwo");
  var divBorder = document.getElementById("toolsTwo");
  if (x.style.display != "none") {
    x.style.display = "none";
    divBorder.style.border = "none";
  } else {
    divBorder.style.borderBottom = "2px solid white";
    x.style.display = "block";
  }
}