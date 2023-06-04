
try {
	const home__checkboxActive = document.querySelector('.home__checkbox-active')
	const btnBell = document.querySelector('.btn-bell')
	btnBell.disabled = true
	home__checkboxActive.addEventListener('click', ()=> {
		if (home__checkboxActive.checked == true) {
			btnBell.disabled = false
			btnBell.classList.remove('btn-bell--disabled')
		}
		if (home__checkboxActive.checked == false){
			btnBell.classList.add('btn-bell--disabled')
			btnBell.disabled = true
		}
	})
}
catch {

}


try {
	const contacts_myBtn = document.querySelector('.btn_cards')
	const contacts_myForm = document.querySelector('.form')
	const contacts_containerForm = document.querySelector('.container-form')
	const contacts_btnCreate = document.querySelector('.btn')
	
	let i = 0;
	
	contacts_myBtn.addEventListener('click', ()=> {
		if (i===0) {
			contacts_myForm.classList.remove('form-none')
			i++;
		}
			else {
			contacts_containerForm.append(myForm.cloneNode(true))
	}})
}
catch {
	
}
