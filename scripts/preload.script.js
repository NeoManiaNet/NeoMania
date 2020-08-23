function loadingLoaded ()
{
    document.getElementById('loading').className = "show";
}

window.addEventListener("load",function(){
	var content = document.getElementById("content");
    var loading = document.getElementById("loading");
    
    loading.className = "hide";
    loading.style.display = "none";
    content.style.display = "block";

    content.style.animationDuration = "0.5s";
    content.style.animationTimingFunction = "ease-in-out";
    content.style.animationName = "animate-show";

    content.className = "show";
});
