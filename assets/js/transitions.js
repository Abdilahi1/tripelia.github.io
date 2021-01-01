var btn = document.getElementById("btnNav");
var sidebar = document.getElementById("sideBar");
var container = document.getElementById("btnNavDiv")
var ul = document.getElementById("sideBarList");
var top = document.getElementById("test");
var items = document.getElementsByClassName("hidden");

btn.addEventListener("click", function() {

	if (sidebar.style.cssText === "") {
		sidebar.style.cssText = "width: 20%;";
		container.style.cssText = "margin-left: 20%;";
		ul.style.cssText = "display: block;";
	} else {
		sidebar.style.cssText = "";
		container.style.cssText = "";
		ul.style.cssText = "";
	}

});