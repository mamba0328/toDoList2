function applyChanges(e, chosenTags, tasksCollection, chosenDeadline, showTask) { 

    //tags change
    const taskId = e.target.classList.value;
    let task = '';
    
    for(let i=0; i<tasksCollection.length; i++){
        if(taskId == tasksCollection[i].id){ 
            task = tasksCollection[i];
        }
    }

    task.tags = chosenTags;
    e.target.classList.remove(taskId)

    //date change
    if(task.deadline != chosenDeadline){ 
        task.deadline = chosenDeadline;
        let oldTask = document.getElementById(task.id)
        oldTask.parentElement.remove();
        showTask(task.name, task.deadline, task.id);
    }
     
}

export default applyChanges