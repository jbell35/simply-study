
//open form as a popup
function openForm() {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("blur").style.display = "block";
}

//close the form
function closeForm(){
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("blur").style.display = "none";
}

//take input from the form and display
const getTask = () => {
    document.getElementById("noTasksMessage").style.display = "none";

    const container = document.createElement("div");
    container.classList = "task-card";

    const tCont = document.createElement("h3");
    tCont.id = "taskName";

    const subjCont = document.createElement("h4");
    subjCont.id = "className";

    const descCont = document.createElement("p");
    descCont.id = "tDesc";

    const dateCont = document.createElement("p");
    dateCont.id = "tDate";

    const task = document.getElementById("taskInput");
    const subject = document.getElementById("subject");
    const descr = document.getElementById("description");
    const dueDate = document.getElementById("dueDate");

    taskInput = task.value;
    subjectInput = subject.value;
    descrInput = descr.value;
    dueDateInput = dueDate.value;

    tCont.textContent = taskInput;
    subjCont.textContent = subjectInput;
    descCont.textContent = descrInput;
    dateCont.textContent = dueDateInput;
    
    container.appendChild(tCont);
    container.appendChild(subjCont);
    container.appendChild(descCont);
    container.appendChild(dateCont);

    document.getElementById("cardsCont").appendChild(container);

}

//submit form button actions
document.getElementById("submitBtn").addEventListener('click', (event) => {
    event.preventDefault();
    closeForm();
    getTask();
    document.getElementById("theForm").reset();
});

// close form button actions
document.getElementById("closeBtn").addEventListener('click', (event)  => {
    event.preventDefault();
    closeForm();
});

if (document.getElementById("cardsCont").children.length === 0){
    document.getElementById("noTasksMessage").style.display = "block";
}