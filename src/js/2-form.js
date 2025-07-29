


let formData = {
	email: '',
	message: '',
};
const formEl = document.querySelector('.feedback-form');
const formLoaded = getFromLs('feedback-form-state', {});

try {
		
		formEl.elements.email.value = formLoaded.email;
		formEl.elements.message.value = formLoaded.message;
		formData = formLoaded;
} catch { };


formEl.addEventListener('input', e => {
	const email = e.currentTarget.elements.email.value.trim();
	const message = e.currentTarget.elements.message.value.trim();
	if (email === '' || message === '') { return; }
	formData.email = email;
	formData.message = message;
	saveToLs('feedback-form-state', formData);

});
function saveToLs(key, value) {
	const jsonData = JSON.stringify(value);
	localStorage.setItem(key, jsonData);
}



function getFromLs(key) {
	const jsonData = localStorage.getItem(key);
	if (!jsonData || jsonData === 'null') { return; }
	try {
		const data = JSON.parse(jsonData);
		return data;
	} catch {
		return  jsonData;
	}
}

formEl.addEventListener('submit', e => {
	e.preventDefault();
	if (formEl.elements.email.value.trim() === '' || formEl.elements.message.value.trim() === '') { alert('Fill please all fields'); return; }
	else{console.log(formData)};
	localStorage.removeItem('feedback-form-state');
	formEl.reset();
	formData.email = '';
	formData.message = '';
	
	
})

