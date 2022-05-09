import { openModal, closeModal } from "./modalAppearence"; 
import makeTask from "./taskFactory";
import showTask from "./showTask";
import makeBtnsFunctional from "./completeBtnDOM";


const tasksCollection = []; 
let chosenDeadline = ''; 

//add a task button functionality 
const addATaskButton = document.getElementById('addATask'); 

addATaskButton.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgb(36, 163, 26)';
})
addATaskButton.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'rgb(26, 153, 26)'
})
addATaskButton.addEventListener('click', () => {
    openModal();
})

//module overlay functionality
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
    closeModal();
})

//modal inputs functionality 
const taskNameInput = document.getElementById('modalTaskName'); 
 
taskNameInput.addEventListener('mouseenter', (e) => { 
    e.target.style.outline = 'solid';
    e.target.style.outlineWidth = '1px';
    e.target.style.outlineColor = 'grey';
})

taskNameInput.addEventListener('mouseleave', (e) => { 
    e.target.style.outline = 'none'
})

//modal window deadlines functionality
const deadlines = Array.from(document.getElementsByClassName('deadline'));

deadlines.forEach(deadline => { 
    deadline.addEventListener('mouseover', (e)=> { 
        e.target.style.color = 'rgba(0,0,0,0.8)';
    })
    deadline.addEventListener('mouseout', (e)=> { 
        e.target.style.color = 'rgb(78, 78, 78)';
        if(chosenDeadline === ''){ 
         e.target.style.borderBottom = 'none';
      } 
    })
})
    for(let i=0; i<deadlines.length; i++){ 

     deadlines[i].addEventListener('click', (e)=> { 
            return chosenDeadline = i;
        })
    }

//save task module functionality 
const saveTask = document.getElementById('saveTask');

saveTask.addEventListener('click', () => {
    //creates new task and push it to collection
    let newTask = makeTask(taskNameInput.value, chosenDeadline);
    tasksCollection.push(newTask);
    showTask(newTask.name, newTask.deadline);
    chosenDeadline = '' ; //returns deadline to unchosen 
    closeModal(); 
    makeBtnsFunctional();
    
})

saveTask.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgb(26, 153, 26)';
})

saveTask.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'transparent';
})

//deadlineWrappers functionality 
const todoDeadlines = Array.from(document.getElementsByClassName('todoDeadline'));
todoDeadlines.forEach(todoDeadline => { 
    todoDeadline.addEventListener('mouseover', (e) => { 
        if(!e.target.previousElementSibling){
            e.target.style.borderBottom = '1.5px solid grey';
            e.target.style.color = 'black';
        } else { 
        e.target.classList.add('mouseon');
     }
    })

    todoDeadline.addEventListener('mouseleave', (e) => { 
        if(!e.target.previousElementSibling){
            e.target.style.borderBottom = 'none';
            e.target.style.color = 'rgb(100, 100, 100)';
        } else { 
        e.target.classList.remove('mouseon');
     }
    })

    todoDeadline.addEventListener('click', (e) => { 
        if(e.target.nextElementSibling.style.display === 'none'){ 
            e.target.nextElementSibling.style.display = 'flex';
        } else { 
            e.target.nextElementSibling.style.display = 'none'
        }
        
    })
})

