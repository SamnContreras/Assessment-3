console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been successfully submitted!');
}

// function imageAlert (event){
// 	event.target.classList.alert("imageAlert")
// }
// imageB.addEventListener("mouseover",imageAlert )

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);