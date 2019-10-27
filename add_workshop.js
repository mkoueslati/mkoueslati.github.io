const titleField = document.querySelector('#title');
const mentorsField = document.querySelector('#mentors');
const descriptionField = document.querySelector('#description');
const addWorkshopForm = document.querySelector('#add-workshop-form');

addWorkshopForm.addEventListener('submit', evt => {
    evt.preventDefault();
    
    const payload = {
        title: titleField.value,
		mentors: mentorsField.value,
		description: descriptionField.value
    }

    fetch('http://localhost:8081/workshops', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(resp => {
            console.log(resp);
        })
        .catch(err =>console.error);
})