function returnFromCompleted(e, tasksCollection) { 

    const taskId = e.target.id;
    let task = '';

    for(let i=0; i<tasksCollection.length; i++){ 
        if(taskId == tasksCollection[i].id) { 
            task = tasksCollection[i];
        }
    }


    const properties = [task.name, task.deadline, task.id];
    return properties
}

export default returnFromCompleted;