
function openForm() {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("blur").style.display = "block";
}

function closeForm(){
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("blur").style.display = "none";
}



function createCard() {
    const card = '';

    return card;
}

const getTask = () => {
    const task = document.getElementById("taskInput");
    const subject = document.getElementById("subject");
    const descr = document.getElementById("description");
    const dueDate = document.getElementById("dueDate");

    taskInput = task.value;
    subjectInput = subject.value;
    descrInput = descr.value;
    dueDateInput = dueDate.value;

    document.getElementById("taskName").textContent = taskInput;
    document.getElementById("className").textContent = subjectInput;
    document.getElementById("tDesc").textContent = descrInput;
    document.getElementById("tDate").textContent = dueDateInput;
    
}

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    closeForm();
    getTask();
    document.getElementById("theForm").reset();
})