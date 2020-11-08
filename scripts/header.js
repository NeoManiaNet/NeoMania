var header={
    initialize:function(){
        window.addEventListener("load", function() 
        {
            setTimeout(function(){
                var scrollTop = document.documentElement.scrollTop;

                if (scrollTop > 50) {
                    document.getElementById("navbar-container").classList.add("navbar-min");
                } else {
                    document.getElementById("navbar-container").classList.remove("navbar-min");
                }
            
                if(window.location.href.includes("#"))
                {
                    var parts = window.location.href.split("#");
            
                    app.scrollTo(parts[1]);
                }
            },300);
        });

        window.addEventListener("scroll", function() 
        {
            var scrollTop = document.documentElement.scrollTop;

            if (scrollTop > 5) {
                document.getElementById("navbar-container").classList.add("navbar-min");
            } else {
                document.getElementById("navbar-container").classList.remove("navbar-min");
            }
        });
    }
}