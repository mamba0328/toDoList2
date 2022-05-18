function openModalInfo(e, lightTheTag, tasksCollection, chosenTags) {
    //shows which tags the task has
    const taskId = e.target.parentElement.classList.value;
    let task = '';
    
    for(let i=0; i<tasksCollection.length; i++){
        if(taskId == tasksCollection[i].id){ 
            task = tasksCollection[i];
        }
    }

    chosenTags = task.tags
    lightTheTag(task.tags)

    //changes name to tasks 
    const taskName = document.getElementById('taskInfoName')
    taskName.innerText = task.name

    //changes notes to tasks
    const taskNotes = document.getElementById('taskInfoNotes')
    taskNotes.innerText = task.notes

    const modalInfo = document.getElementById('modalInfo');
    const overlay = document.getElementById('overlay');
    modalInfo.classList.add('active');
    overlay.classList.add('active');

    //changes deadline 
    const infoDeadlines = Array.from(document.getElementsByClassName('infoDeadline'));

    infoDeadlines.forEach(element => {
        element.style.color = 'rgb(78,78,78)'
    });

    if(task.deadline == 0){ 
        infoDeadlines[0].style.color = 'rgba(26, 153, 26)'
    }
    if(task.deadline == 1){ 
        infoDeadlines[1].style.color = 'rgba(26, 153, 26)'
    }
    if(task.deadline == 2){ 
        infoDeadlines[2].style.color = 'rgba(26, 153, 26)'
    }

    const applyButton = document.getElementById('apply')
    applyButton.classList.add(taskId) //helps in further identidication
    
    return chosenTags
}

function closeModalInfo() { 
    const modalInfo = document.getElementById('modalInfo');
    const overlay = document.getElementById('overlay');
    modalInfo.classList.remove('active');
    overlay.classList.remove('active');

    const applyButton = document.getElementById('apply')
    
    if(applyButton.classList.contains(applyButton.classList.value)){
    applyButton.classList.remove(applyButton.classList.value);
    }
}

export {openModalInfo,closeModalInfo}