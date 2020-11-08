var solutions = {
	handleScroll:function(){
		var scrollTop = document.documentElement.scrollTop;

		if (scrollTop > 50) {
			document.getElementById("navbar-container").classList.add("navbar-dark");
		} else {
			document.getElementById("navbar-container").classList.remove("navbar-dark");
		}
	},
	initialize: function(){
		this.resetInterval();
		window.addEventListener("scroll", solutions.handleScroll);
	},
	stop:function(){
		window.removeEventListener("scroll", solutions.handleScroll);
	},
};