var page = {
	hasAboutLoaded: false,
	slideIndex: 0,
	slideInterval: null,
	slide: function (toRight, fromButton){
			if(fromButton === true)
			this.resetInterval();

			if(toRight === true)
				this.slideIndex++;
			else
                this.slideIndex--;

			if(this.slideIndex === 3)
                this.slideIndex = 0;
			else if (this.slideIndex === -1)
                this.slideIndex = 2;

			if(this.slideIndex === 1)
				document.getElementById("carousel").style.marginLeft = "-100vw";
			else if (this.slideIndex === 2)
				document.getElementById("carousel").style.marginLeft = "-200vw";
			else {
				document.getElementById("carousel").style.marginLeft = "0";
		}
	},
	resetInterval: function ResetInterval(){
			clearInterval(this.slideInterval);

			this.slideInterval = setInterval(function(){
				page.slide(true, false);
			}, 7000);
	}
};

window.onload = function(){
	page.resetInterval();
}

window.addEventListener("scroll", function() 
{
	var scrollTop = document.documentElement.scrollTop;

	if(scrollTop > 300 && !page.hasAboutLoaded)
	{
		page.hasAboutLoaded = true;

		document.getElementById("who-we-are").style.marginTop = "10vh";
		document.getElementById("who-we-are").style.opacity = "1";

		document.getElementById("what-we-do").style.marginTop = "50vh";
		document.getElementById("what-we-do").style.opacity = "1";

		document.getElementById("what-we-do-first-part").style.marginTop = "2vh";
		document.getElementById("what-we-do-first-part").style.opacity = "1";
	}
});