var homepage = {
	hasAboutLoaded: false,
	slideIndex: 0,
	slideInterval: null,
	initialize: function(){
		window.onload = function(){
			this.resetInterval();
		}
		
		window.addEventListener("scroll", function() 
		{
			var scrollTop = document.documentElement.scrollTop;
		
			console.log(scrollTop);
		
			if (scrollTop < 5) {
				document.getElementById("navbar-container").classList.remove("navbar-light");
				document.getElementById("navbar-container").classList.remove("navbar-dark");
			} 
			else if (scrollTop > 5 && scrollTop < 850){
				document.getElementById("navbar-container").classList.add("navbar-light");
				document.getElementById("navbar-container").classList.remove("navbar-dark");
		
			} else if (scrollTop > 850) {
				document.getElementById("navbar-container").classList.remove("navbar-light");
				document.getElementById("navbar-container").classList.add("navbar-dark");
			}
		
			if(scrollTop > 300 && !this.hasAboutLoaded)
			{
				this.hasAboutLoaded = true;
		
				document.getElementById("who-we-are").style.marginTop = "0vh";
				document.getElementById("who-we-are").style.opacity = "1";
		
				document.getElementById("what-we-do").style.marginTop = "0vh";
				document.getElementById("what-we-do").style.opacity = "1";
		
				document.getElementById("what-we-do-first-part").style.marginTop = "2vh";
				document.getElementById("what-we-do-first-part").style.opacity = "1";
			}
		});
	},
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
				this.slide(true, false);
			}, 7000);
	}
};