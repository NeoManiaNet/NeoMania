var app = {
	scrollTo: function(top){
		window.scrollTo({ top: top, behavior: 'smooth' });
	},
	scrollToTop: function(){
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},
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