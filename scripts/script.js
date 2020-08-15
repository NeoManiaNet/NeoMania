var app = {
	scrollToBottom: function(){
		window.scrollTo({ top: document.body.scrollHeight - 1000, behavior: 'smooth' });
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