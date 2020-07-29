window.onload = function(){
	var index = 1;

	setInterval(function(){
		if(index === 1)
			document.getElementById("carousel").style.marginLeft = "-100vw";
		else if (index === 2)
			document.getElementById("carousel").style.marginLeft = "-200vw";
		else {
			document.getElementById("carousel").style.marginLeft = "0";
			index = 0;
		}

		index++;
	},10000);
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