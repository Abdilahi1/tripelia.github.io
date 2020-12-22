var image = document.getElementById("menuButton");
var sidebar = document.getElementById("side-bar");
var container = document.getElementById("menuDiv")

image.addEventListener("click", function() {

	if (sidebar.style.cssText === "") {
		sidebar.style.cssText = "width: 15%;";
		container.style.cssText = "margin-left: 15%;";
	} else {
		sidebar.style.cssText = "";
		container.style.cssText = "";
	}

});