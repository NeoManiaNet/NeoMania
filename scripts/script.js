var app = {
	redirectAndScrollTo: function(url, elementName){
		window.location.href = url + "#" + elementName;},
	scrollTo: function(elementName){
		var element = document.getElementById(elementName);
		var screenPosition = element.getBoundingClientRect();
		
		window.scrollTo({ top: document.documentElement.scrollTop + screenPosition.top, behavior: 'smooth' });
	},
	scrollToTop: function(){
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},
	scrollToBottom: function(){
		window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
	}
};

/* scrolling function */

window.addEventListener("scroll", function() 
{
	var scrollTop = document.documentElement.scrollTop;

	if (scrollTop> 50) {
    	document.getElementById("navbar-container").className = "navbar-container-light";
    	document.getElementById("navbar").className = "navbar-light";
	} else {
	    document.getElementById("navbar-container").className = "navbar-container-dark";
	    document.getElementById("navbar").className = "navbar-dark";
	}
});

window.addEventListener("load", function() 
{
	setTimeout(function(){
		var scrollTop = document.documentElement.scrollTop;

		if (scrollTop> 50) {
			document.getElementById("navbar-container").className = "navbar-container-light";
			document.getElementById("navbar").className = "navbar-light";
		} else {
			document.getElementById("navbar-container").className = "navbar-container-dark";
			document.getElementById("navbar").className = "navbar-dark";
		}
	
		if(window.location.href.includes("#"))
		{
			var parts = window.location.href.split("#");
	
			app.scrollTo(parts[1]);
		}
	},300);
});