function showTask(name, deadline, id) { 
    const task = document.createElement('div');
    task.setAttribute('id', 'task');

    task.classList.add(id);
    console.log(task.classList.value);

    const completeCircle = document.createElement('div');
    completeCircle.classList.add('completeCircle');

    const taskName = document.createElement('h3');
    taskName.classList.add('taskName')
    taskName.setAttribute('id', id);
    taskName.innerText = name;

    task.appendChild(completeCircle);
    task.appendChild(taskName);

    //cheks in which taskZone it will be sent 

    if(deadline == 0){ 
        const todayHolder = document.getElementById('todayHolder'); 
        todayHolder.appendChild(task);
    } else if( deadline == 1) { 
        const tommorowHolder = document.getElementById('tommorowHolder'); 
        tommorowHolder.appendChild(task);
    } else { 
        const somedayHolder = document.getElementById('somedayHolder');
        somedayHolder.appendChild(task);
    }
}

export default showTask; 