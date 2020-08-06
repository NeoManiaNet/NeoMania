var app = {
	hasAboutLoaded: false,
	slideIndex: 0,
	slideInterval: null,
	slide: function (toRight, fromButton){
			if(fromButton === true)
			this.resetInterval();

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
			clearInterval(this.slideInterval);

			this.slideInterval = setInterval(function(){
				app.slide(true, false);
			},7000);
	}
};


window.onload = function(){
	app.resetInterval();
}

/* scrolling function */

window.onscroll = function() 
{
	var scrollTop = document.documentElement.scrollTop;

	if (scrollTop> 50) {
    	document.getElementById("navbar-container").className = "navbar-container-light";
    	document.getElementById("navbar").className = "navbar-light";
	} else {
	    document.getElementById("navbar-container").className = "navbar-container-dark";
	    document.getElementById("navbar").className = "navbar-dark";
	}

	if(scrollTop > 300 && !app.hasAboutLoaded)
	{
		app.hasAboutLoaded = true;

		document.getElementById("who-we-are").style.marginTop = "5vh";
		document.getElementById("who-we-are").style.opacity = "1";

		document.getElementById("what-we-do").style.marginTop = "39vh";
		document.getElementById("what-we-do").style.opacity = "1";

		document.getElementById("what-we-do-first-part").style.marginTop = "0vh";
		document.getElementById("what-we-do-first-part").style.opacity = "1";

		document.getElementById("what-we-do-second-part").style.marginTop = "0vh";
		document.getElementById("what-we-do-second-part").style.opacity = "1";
	}

	console.log(document.body.scrollTop + " " + document.documentElement.scrollTop)
};