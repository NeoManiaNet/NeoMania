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
	},
	submitForm: function(){
		document.getElementById("form").submit();
	}
};

/* scrolling function */

window.addEventListener("load", function() 
{
	setTimeout(function(){
		var scrollTop = document.documentElement.scrollTop;

		if (scrollTop > 50) {
			document.getElementById("navbar-container").classList.add("navbar-min");
		} else {
			document.getElementById("navbar-container").classList.remove("navbar-min");
		}
	
		if(window.location.href.includes("#"))
		{
			var parts = window.location.href.split("#");
	
			app.scrollTo(parts[1]);
		}
	},300);
});

window.addEventListener("scroll", function() 
{
	var scrollTop = document.documentElement.scrollTop;

	if (scrollTop > 5) {
    	document.getElementById("navbar-container").classList.add("navbar-min");
	} else {
		document.getElementById("navbar-container").classList.remove("navbar-min");
	}
});