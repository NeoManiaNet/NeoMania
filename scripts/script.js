var app = {
	slideIndex: 0,
	slideInterval: null,
	slide: function (toRight){
			if(toRight === true)
				app.slideIndex++;
			else
				app.slideIndex--;

			if(app.slideIndex === 3)
				app.slideIndex = 0;
			else if (app.slideIndex === -1)
				app.slideIndex = 2;

			if(app.slideIndex === 1)
				document.getElementById("carousel").style.marginLeft = "-100vw";
			else if (app.slideIndex === 2)
				document.getElementById("carousel").style.marginLeft = "-200vw";
			else {
				document.getElementById("carousel").style.marginLeft = "0";
		}
	},
	resetInterval: function ResetInterval(){
			clearInterval(app.slide);

			setInterval(function(){
				app.slide(true);
			},15000);
	}
};


window.onload = function(){
	app.resetInterval();
}

window.onscroll = function() 
{
	if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    	document.getElementById("navbar-container").className = "navbar-container-light";
    	document.getElementById("navbar").className = "navbar-light";
	} else {
	    document.getElementById("navbar-container").className = "navbar-container-dark";
	    document.getElementById("navbar").className = "navbar-dark";
	}
};

/* functions */
