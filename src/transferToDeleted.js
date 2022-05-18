function transferTask(e, tasksCollection) { 
    const taskId = e.target.parentElement.classList.value;
    let task = 0;
    
    for(let i=0; i<tasksCollection.length; i++){ 
        if(taskId == tasksCollection[i].id) { 
            task = tasksCollection[i];
        }
    }

    const completedTasksHolder = document.getElementById('competedTasks'); 
    const completedTask = document.createElement('del'); 
    completedTask.innerText = task.name; 

    completedTask.classList.add('completedTask');
    completedTask.setAttribute('id', task.id)
    completedTasksHolder.appendChild(completedTask);
} 

export default transferTask