jQuery(document).ready(function($) {
	$('#submit').click(function(event) {
		console.log("Submit button was clicked");
	});
	$('#form').validate({
		errorClass:"inputError",
		

		}
		errorPlacement: function(error, element){
			console.log(error);
			console.log(element);

		},
		rules : {
			username :{
				required: true,
				email : true
			},

			password : {
				required :true,
				minlength : 6,
				maxlength : 10
			}
		},

		messages : {
			username : {
				required : "Come on don't be shy",
				email : "Your email looks funny"
			},

			password :{
				required :"Enter your password",
				minlength : "Your password is at least {0} characters long",
				maxlength :"Your password can't be longer than {0} characters"
			
		}

	}
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

