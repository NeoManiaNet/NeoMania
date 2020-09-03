window.addEventListener("scroll", function() 
{
	var scrollTop = document.documentElement.scrollTop;


	if (scrollTop > 50) {
    	document.getElementById("navbar-container").classList.add("navbar-dark");
	} else {
		document.getElementById("navbar-container").classList.remove("navbar-dark");
	}
});