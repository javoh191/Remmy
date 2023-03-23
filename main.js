
Parse.Cloud.define("getCredentials", function(request, response) {
    var token = request.params.token;
    var userLogin, userPassword;
  
    response.success({'username': userLogin, 'password': userPassword});
  });
  