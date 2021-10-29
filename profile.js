<body>
<script src="profile.html"></script>

</body>

const favColor = document.querySelector("#color")
const favPlace = document.querySelector("#place")
const favRitual = document.querySelector("#ritual")


function handleBtn (evt) {
    evt.preventDefault();
	
	alert('My favorite color is red!');
}

let div = document.querySelector("div#contacts");
div.addEventListener("click", handleBtn);





// <form id="contact">
// 			Your name:
// 			<input type="text">

// 			Message:
// 			<input type="textarea">

// 			<input type="submit">


// 		</form>



//         function handleSubmit(evt) {
//             evt.preventDefault();
            
//             alert('Form has been successfully submitted!');
//         }

//         let form = document.querySelector('form#contact');

//         form.addEventListener('submit', handleSubmit);



        