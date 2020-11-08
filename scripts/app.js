app = {
    baseUrl : "https://neomanianet.github.io/NeoMania/",
    get : function(url, onloaded){
        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", url, true);
        // xhr.onload = function (e) {
        //   if (xhr.readyState === 4) {
        //     if (xhr.status === 200) {
        //         onloaded(xhr.responseText);
        //     } else {
        //       console.error(xhr.statusText);
        //     }
        //   }
        // };
        // xhr.onerror = function (e) {
        //   console.error(xhr.statusText);
        // };
        // xhr.send(null);

        onloaded("Testtttt");
    },
    start : function(){
      this.loadPage("homepage.html", (result)=>{
        let content = document.getElementById("content");
        let loading = document.getElementById("loading");
        let loadingContianer = document.getElementById("loading-container");

        setTimeout(()=>{
          loadingContianer.classList.remove("animate-show");
          loadingContianer.classList.add("animate-hide");
          setTimeout(()=>{
            loading.style.opacity = 0;
            setTimeout(()=>{
              content.classList.add("animate-show");
            },200);
          },400);
        },1000);

        if(result){
            content.innerHTML += result;
        }
        else{
            content.innerHTML = "Sorry we're having trouble. Please try again later :)";
        }
    });
    },
    loadComponent : function(componentName, containerId, onloaded){
      this.get(this.baseUrl + componentName, (result)=>{
        let content = document.getElementById(containerId);

        if(result){
            content.innerHTML += result;
        }
        else{
            content.innerHTML = "Sorry we're having trouble. Please try again later :)";
        }

        if(onloaded)
          onloaded(result);
      })
    },
    loadPage : function(page, onloaded){
      let content = document.getElementById("content");
      this.loadComponent("header.html","content",(r)=>console.log(r));
      content.innerHTML += "<div id='main-body'></div>";
      this.loadComponent("footer.html","content",(r)=>console.log(r));

      this.loadComponent(page, "main-body", (r)=> {
        if(onloaded)
          onloaded(r);
      });
    },
    redirectAndScrollTo: function(url, elementName){
      window.location.href = url + "#" + elementName;},
    scrollTo: function(elementName){
      var element = document.getElementById(elementName);
      var screenPosition = element.getBoundingClientRect();
      
      window.scrollTo({ top: document.documentElement.scrollTop + screenPosition.top, behavior: 'smooth' });
    },
    scrollToTop: function(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToBottom: function(){
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
}

app.start();