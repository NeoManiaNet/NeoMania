var app = {
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
	},
	submitForm: function(){
		var form = document.getElementById("form");
		var name = document.getElementById("name");
		var email = document.getElementById("email");
		var phone = document.getElementById("phone");
		var msg = document.getElementById("msg");

		if(!name.checkValidity() || !email.checkValidity() || !phone.checkValidity())
		{
			document.getElementById("submit").click();
			return;
		}

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "POST", "https://localhost:44337/Applications/Create", true);
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState === 4) {
				var response = xmlHttp.responseText;
		
				if(xmlHttp.status === 200)
				{
				    name.value = "";
					email.value = "";
					phone.value = "";
					msg.value = "";

					Swal.fire(
						"Thank you for your application!" ,
						"We\'ll contact you soon.",
						'success'
					  );
				}else{
					Swal.fire({
						icon: 'error',
						title: 'Something went wrong!',
						text: response
					  })
				}
			}
		  }

		xmlHttp.send( JSON.stringify({
			Name: name.value,
			EMail: email.value,
			PhoneNumber: phone.value,
			AdditionalMessage : msg.value
		}));
	}
};

/* scrolling function */

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