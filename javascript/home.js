
function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

function closeForm(){
    document.getElementById("formContainer").style.display = "none";
}

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    closeForm();
})