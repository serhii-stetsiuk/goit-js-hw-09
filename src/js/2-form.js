
const formEl = document.querySelector('.feedback-form');

let formData = {
	email: '',
	message: '',
};



formEl.addEventListener('input', e => {
	const email = e.currentTarget.elements.email.value.trim();
	const message = e.currentTarget.elements.message.value.trim();	
	formData.email = email;
	formData.message = message;
	saveToLs('feedback-form-state', formData);
	
});
function saveToLs(key, value) {
	const jsonData = JSON.stringify(value);
	localStorage.setItem(key, jsonData);
}
function getFromLs(key, defaultValue) {
	const jsonData = localStorage.getItem(key);
	try {
		const data = JSON.parse(jsonData);
		return data;
	} catch {
		return defaultValue || jsonData;
	}

};

	const formLoaded = getFromLs('feedback-form-state');
	
	try {
		formEl.elements.email.value = formLoaded.email;
		formEl.elements.message.value = formLoaded.message;
		formData = formLoaded;
	} catch { };

formEl.addEventListener('submit', e => {
	e.preventDefault();
	if (formEl.elements.email.value === '' || formEl.elements.email.value === '') { alert('Fill please all fields') }
	else{console.log(formData)};
	localStorage.removeItem('feedback-form-state');
});

