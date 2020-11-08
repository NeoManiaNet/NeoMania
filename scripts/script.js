var app = {
	submitForm: function(){
		Swal.fire({
			title: "We're processing your request",
			allowOutsideClick: false,
			onBeforeOpen: () => {
			  Swal.showLoading();
			}
		  })

		var name = document.getElementById("name");
		var email = document.getElementById("email");
		var phone = document.getElementById("phone");
		var msg = document.getElementById("msg");

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "POST", "https://neomania.azurewebsites.net/_api/Applications/Create", true);
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState === 4) {
				var response = xmlHttp.responseText;

				Swal.hideLoading();

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