function valid(form) {
	let fail = false;
	let name = form.name.value;
	let password = form.password.value;
	let RePassword = form.RePassword.value;
	let state = form.state.value;
	let email = form.email.value;
	let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
	if (name == "") 
		fail = "Вы не ввели свое имя!";
	else if (adr_pattern.test(email) == false)
		fail = "Вы ввели email неккоректно";
	else if (password == "") 
		fail = "Вы не ввели пароль!";
	else if (password != RePassword)
		fail = "Пароли не совпадают!";
	else if (state == "")
		fail = "Укажите пол!";
	
	if (fail) 
		alert(fail);
	else
		window.location = "https://clck.ru/Ey7Az";
}