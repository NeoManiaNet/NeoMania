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
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "POST", "https://localhost:44337/Applications/Create", false ); // false for synchronous request
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		xmlHttp.setRequestHeader('Access-Control-Allow-Origin', 'https://localhost:44337/');
		xmlHttp.send( JSON.stringify({
			Name:document.getElementById("name").nodeValue,
			EMail:document.getElementById("email").nodeValue,
			PhoneNumber:document.getElementById("phone").nodeValue,
			AdditionalMessage : document.getElementById("msg").nodeValue
		}));
		return xmlHttp.responseText;
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