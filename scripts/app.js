app = {
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
    start : function(){
        app.get("https://neomanianet.github.io/NeoMania/homepage.html", (result)=>{
            let content = document.getElementById("content");

            if(result){
                content.innerHTML = result;
            }
            else{
                content.innerHTML = "Sorry we're having trouble. Please try again later :)";
            }
        })
    }
}

app.start();