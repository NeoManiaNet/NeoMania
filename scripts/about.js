var about = {
	hasOurMissionLoaded: false,
	hasCoreValuesLoaded: false,
	handleScroll:function(){
		var scrollTop = document.documentElement.scrollTop;

		if (scrollTop > 50) {
			document.getElementById("navbar-container").classList.add("navbar-dark");
		} else {
			document.getElementById("navbar-container").classList.remove("navbar-dark");
		}

		if(scrollTop > 180 && !page.hasOurMissionLoaded)
		{
			page.hasOurMissionLoaded = true;

			document.getElementById("our-mission").style.top = "0";
			document.getElementById("our-mission").style.opacity = "1";
		}
		
		if(scrollTop > 580 && !page.hasCoreValuesLoaded)
		{
			page.hasCoreValuesLoaded = true;

			document.getElementById("core-values").style.top = "0";
			document.getElementById("core-values").style.opacity = "1";
			
			document.getElementById("quality-driven").style.marginTop = "0";
			document.getElementById("quality-driven").style.opacity = "1";
			
			document.getElementById("innovation").style.marginTop = "0";
			document.getElementById("innovation").style.opacity = "1";
			
			document.getElementById("commitment").style.marginTop = "0";
			document.getElementById("commitment").style.opacity = "1";
		}
	},
	initialize: function(){
		window.addEventListener("scroll", about.handleScroll);
	},
	stop:function(){
		window.removeEventListener("scroll", about.handleScroll);
	},
};