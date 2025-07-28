


let formData = {
	email: '',
	message: '',
};
const formEl = document.querySelector('.feedback-form');
const formLoaded = getFromLs('feedback-form-state');
	
	try {
		formEl.elements.email.value = formLoaded.email;
		formEl.elements.message.value = formLoaded.message;
		formData = formLoaded;
	} catch { };

formEl.addEventListener('input', e => {
	const email = e.currentTarget.elements.email.value.trim();
	formData.email = email;
	
	saveToLs('feedback-form-state', formData);
	
});
formEl.addEventListener('input', e => {
	const message = e.currentTarget.elements.message.value.trim();	
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
formEl.addEventListener('submit', e => {
	e.preventDefault();
	if (formEl.elements.email.value === '' || formEl.elements.message.value === '') { alert('Fill please all fields'); return felse; }
	else{console.log(formData)};
	localStorage.removeItem('feedback-form-state');
	formEl.reset();
});

