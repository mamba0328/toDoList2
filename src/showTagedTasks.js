function showTagedTasks(e, tasksCollection){ 
    const chosenTag = e.target.innerText
    const tasks = Array.from(document.getElementsByClassName('taskName'));
    let matchedTasks = [];

    for(let i=0; i<tasksCollection.length; i++){ 
        for(let j=0; j<tasksCollection.length; j++){ 
            if(chosenTag == tasksCollection[i].tags[j]){ 
                matchedTasks.push(tasksCollection[i].id)
            }
        }
    }

    tasks.forEach(task => {
        task.parentElement.style.display = 'none';
        for(let i=0; i<tasks.length; i++){
            if(matchedTasks[i] == task.id){ 
                task.parentElement.style.display = 'flex';
            }
        }
    })
}

function cleanFilters(tasksCollection){ 
    const tasks = Array.from(document.getElementsByClassName('taskName'));
    tasks.forEach(task => {
            task.parentElement.style.display = 'flex';
    })
}

export {showTagedTasks, cleanFilters}