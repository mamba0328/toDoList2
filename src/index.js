import { openModal, closeModal } from "./modalAppearence"; 



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
     e.target.style.borderBottom = '1px solid black'
 })
 deadline.addEventListener('mouseout', (e)=> { 
    e.target.style.borderBottom = 'none'
})
})

//save task module functionality 
const saveTask = document.getElementById('saveTask');

saveTask.addEventListener('click', () => {
    closeModal();
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
})