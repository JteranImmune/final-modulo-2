
const deleteTask = () =>{

    const taskCheck = document.querySelectorAll('.taskCkeck[type=checkbox]');

    taskCheck.forEach(item => {
        item.addEventListener('change' , () => {
            if (item.checked){
                const li = item.parentElement;
                li.classList.add("fadeOut");
                setTimeout(() =>li.remove(), 500);
            };
        });
    });
};

const deleteAllTask = () =>{

    const taskAllcheck = document.querySelector('#deleteAllTask[type=checkbox]');
    const taskCheck = document.querySelectorAll('.taskCkeck[type=checkbox]');

    taskAllcheck.addEventListener('change', () => {

        taskCheck.forEach((itemTask) => {
            if(!itemTask.checked) {
                console.log(itemTask);
                itemTask.checked = true;
                const li = itemTask.parentElement;
                li.classList.add("fadeOut");
                setTimeout(() =>li.remove(), 500);
                setTimeout(() =>taskAllcheck.checked = false , 500);
            } 
        }); 
    });
};

const addTask = () => {

    const taskGroup = document.querySelector('.list-group');
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDescription = document.getElementById('taskDescription').value;
    
    if (taskTitle === '') {
        alert("Please enter a Title");
        return;
    } else if (taskDescription === '') {
        alert("Please enter a task");
        return;
    };
        
    let li = document.createElement('li');
    let inputTask = document.createElement('input');
    let label = document.createElement('label');
    let taskElement = document.createElement('p');
    
    li.className = 'list-group-item';
    inputTask.className = 'form-check-input taskCkeck me-2';
    inputTask.type='checkbox';
    label.className = 'form-check-label h6';
    label.innerText = taskTitle;
    taskElement.className = 'pt-4';
    taskElement.innerText = taskDescription;

    taskGroup.append(li);
    li.append(inputTask , label , taskElement);

    deleteTask();
    deleteAllTask();

};

deleteTask();
deleteAllTask();
    
    


