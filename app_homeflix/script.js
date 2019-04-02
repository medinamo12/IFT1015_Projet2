function validateUsername(value){
 
  var courriel = /[a-z0-9.]+@homeflix.(org|ca|com)/;

  var username = /[a-zA-Z]{5,}[a-zA-Z0-9]/;  // a revoir car ca inclut les caracteres special 

  return (courriel.test(value) || username.test(value)) 


}
console.log(validateUsername("medina.mohamed@hotmail.ca"))

function validatePassword(value){
 
  var password = /(?=.*\d+)(?=.*[^A-Za-z0-9])(?=.*[A-Z]).{8,16}/;

  return (password.test(value)) 
}



function updateHeader(username){
	document.getElementById('username').innerHTML = username;

} 
/*
a revoir 
function searchMovies(movies,searchValue) {

	for(var i = 0; i<movies.length;i++){
		if (movies[i].includes(searchValue))
			console.log(movies[i]);
	}
}

*/
