 var user = "";
 var pass = "";
 
 let inputs = document.getElementsByClassName('input-form');		
		for (let input of inputs) {
			input.addEventListener("blur", function() {
				if(input.value.trim() != ""){
					user = input.value.trim();
					input.classList.add("has-val");
				} else {
					user = "";
					input.classList.remove("has-val");
				}
			});
			
		}
		
let inputs2 = document.getElementsByClassName('input-form2');		
		for (let input of inputs2) {
			input.addEventListener("blur", function() {
				if(input.value.trim() != ""){
					pass = input.value.trim();
					input.classList.add("has-val2");
				} else {
					pass = "";
					input.classList.remove("has-val2");
				}
			});
			
		}

function login() {
	if(user == "" || pass == "") {
		alert('Usuário e Senha são obrigatórios!');
	}else {
		window.location.href = "home.html";
	}
	
}

function sair() {
	window.location.href = "index.html";
}