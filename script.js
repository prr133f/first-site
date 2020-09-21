function valid(form) {
	let fail = false;
	let name = form.name.value;
	let passsword = form.password.value;
	let RePassword = form.RePassword.value;
	let state = form.state.value;
	if (name == "") 
		fail = "Вы не ввели свое имя!";
	else if (password == "") 
		fail = "Вы не ввели пароль!";
	else if (password != RePassword)
		fail = "Пароли не совпадают!";
	else if (state == "")
		fail = "Укажите пол!";
	
	if (fail) 
		alert(fail);
	
}