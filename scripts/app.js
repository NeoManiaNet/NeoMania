app = {
    baseUrl : "https://neomanianet.github.io/NeoMania/",
    currentPage : "",
    isLayoutLoaded:false,
    get : function(url, onloaded){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                onloaded(xhr.responseText);
            } else {
              console.error(xhr.statusText);
            }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };
        xhr.send(null);
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
    loadLayout: function(onloaded) {
      if(!this.isLayoutLoaded)
      {
        let content = document.getElementById("content");
        this.loadComponent("header.html","content",(r)=>{
          header.initialize();
          content.innerHTML += "<div id='main-body'></div>";
            this.loadComponent("footer.html","content",(r)=>{
              app.isLayoutLoaded = true;
              
              if(onloaded)
                onloaded(r);
          });
        });
      }
    },
    loadPage : function(page, onloaded){
      this.currentPage = page;
      if(window[page].stop)
        window[page].stop();
      
      let content = document.getElementById("main-body");
      content.innerHTML = "";

      this.loadComponent(page + ".html", "main-body", (r)=> {
        window[page].initialize();
        document.scrollTop = 0;
        if(onloaded)
          onloaded(r);
      });
    },
    navigateToComponent:function(name){
      let content = document.getElementById("main-body");
      content.classList.add("animate-hide");

      this.loadPage(name,(result)=>{
        content.classList.remove("animate-hide");
        content.classList.add("animate-show");
          
        if(!result){
            content.innerHTML = "Sorry we're having trouble. Please try again later :)";
        }
      });
    },
    start : function(){
      this.loadLayout(()=>{
        this.loadPage("homepage",(result)=>{
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
                  document.querySelector("body").classList.remove("hide-overflows");
                },200);
              },400);
            },500);
  
          if(!result){
              content.innerHTML = "Sorry we're having trouble. Please try again later :)";
          }
        });
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