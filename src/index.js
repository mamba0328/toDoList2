import { openModal, closeModal } from "./modalAppearence"; 
import makeTask from "./taskFactory";
import showTask from "./showTask";
import transferTask from "./transferToDeleted";
import returnFromCompleted from "./returnFromDeleted";
import {openModalInfo, closeModalInfo} from "./modalInfoAppearence";
import lightTheTag from "./lightTheChosenTag";
import choseTag from "./choseTag";
import applyChanges from "./applyChanges";
import changeDeadline from "./changeDeadline";
import {showTagedTasks, cleanFilters} from "./showTagedTasks";

const tasksCollection = []; 
let chosenDeadline = ''; 
let chosenTags = [];

//add a task button functionality 
const addATaskButton = document.getElementById('addATask'); 

addATaskButton.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgb(36, 163, 26)';
})
addATaskButton.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'rgb(26, 153, 26)'
})
addATaskButton.addEventListener('click', () => {
    openModal(lightTheTag, chosenTags);
})

//module overlay functionality
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
    closeModal();
    closeModalInfo();
    chosenDeadline = '';
    chosenTags = [];
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
        if(chosenDeadline === ''){ 
            e.target.style.color = 'rgba(26, 153, 26)';
         }    
    })
    deadline.addEventListener('mouseout', (e)=> { 
        if(chosenDeadline === ''){ 
            e.target.style.color = 'rgb(78, 78, 78)';
         }   
    })
})

    for(let i=0; i<deadlines.length; i++){  // remembers which deadline have you choose 

     deadlines[i].addEventListener('click', (e)=> {
            deadlines.forEach(deadline => { //clears others
             deadline.style.color = 'rgb(78,78,78)'
            })
            e.target.style.color = 'rgba(26, 153, 26)'; //highlights the chosen
            return chosenDeadline = i;
        })
    }

//save task module functionality 
const saveTask = document.getElementById('saveTask');

saveTask.addEventListener('click', () => {
    //creates new task and push it to collection
    const notesArea = document.getElementById('notes');
    let newTask = makeTask(taskNameInput.value, chosenDeadline, notesArea.value, chosenTags);
    tasksCollection.push(newTask);
    showTask(newTask.name, newTask.deadline, newTask.id);
    //clears module window
    chosenDeadline = ''; //returns deadline to unchosen 
    chosenTags = [];
    closeModal(); 
})

saveTask.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgb(26, 153, 26)';
})

saveTask.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'transparent';
})

//deadlineWrapper functionality 
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

//completeButtons funcionality  
const body = document.querySelector('body')
body.addEventListener('click', (e) => { 
    if(e.target.matches('.completeCircle')) { 
       transferTask(e, tasksCollection);
       e.target.parentElement.remove();
    }
})

body.addEventListener('mouseover', (e) => { 
    if(e.target.matches('.completeCircle')) { 
        e.target.style.border = '2px solid green'
    }
})

body.addEventListener('mouseout', (e) => { 
    if(e.target.matches('.completeCircle')) { 
        e.target.style.border = '1.99px solid black'
    }
})


//completedTasks functionality 
body.addEventListener('mouseover', (e) => { 
    if(e.target.matches('.completedTask')) { 
       e.target.classList.add('mouseon'); 
    }
})

body.addEventListener('mouseout', (e) => { 
    if(e.target.matches('.completedTask')) { 
       e.target.classList.remove('mouseon'); 
    }
})

body.addEventListener('click', (e)=> { //makes completed tasks on click return back to it's place
    if(e.target.matches('.completedTask')) { 
        showTask(returnFromCompleted(e, tasksCollection)[0],returnFromCompleted(e, tasksCollection)[1],returnFromCompleted(e, tasksCollection)[2]);
        e.target.remove();
     }
 })

 //tags functionality 
const tags = Array.from(document.querySelectorAll('.tag')); //adds tags to chosen array and lights up chosen
tags.forEach(tag => {  
    tag.addEventListener('click', (e)=> {
        choseTag(e, chosenTags);
        console.log(chosenTags);
        lightTheTag(chosenTags);
    })
})

 //task info 
 body.addEventListener('click', (e) => { 
     if(e.target.matches('.taskName')){
         console.log(chosenTags)
         chosenTags = openModalInfo(e, lightTheTag, tasksCollection, chosenTags);
         console.log(chosenTags)
     } 
}) 

//apply changes button  
const applyButton = document.getElementById('apply')
applyButton.addEventListener('click', (e) => { 
    applyChanges(e, chosenTags, tasksCollection, chosenDeadline, showTask); 
    closeModalInfo();
})

//change deadline functionality
const infoDeadline = Array.from(document.getElementsByClassName('infoDeadline'));

infoDeadline.forEach( button => { 
    button.addEventListener('click', (e)=> { 
        infoDeadline.forEach(div => { 
            div.style.color = 'rgb(78,78,78)';
        })

        chosenDeadline = changeDeadline(e, chosenDeadline);
    })
})

//cancel button functionality 
const cancelButton = document.getElementById('cancel'); 
cancelButton.addEventListener('click', ()=> { 
    closeModalInfo();
    chosenDeadline = '';
    chosenTags = [];
})

//navigation functionality 
const navigationTags = Array.from(document.getElementsByClassName('navigationTag')) 
navigationTags.forEach(tag => {

    tag.addEventListener('mouseover', (e) => { 
        tag.classList.add(e.target.id)
    })

    tag.addEventListener('mouseleave', (e) => {
        if(!Array.from(e.target.classList.value).includes('c')){ 
            tag.classList.remove(e.target.id)
        }
       
    })

    tag.addEventListener('click', (e) => {
             
        if(Array.from(e.target.classList.value).includes('c')){
            tag.classList.remove(e.target.id)
            tag.classList.remove('chosen')
            cleanFilters(tasksCollection)
        } else {
            
            navigationTags.forEach(element => {
                element.classList.remove(element.id)
                element.classList.remove('chosen')
            });

            tag.classList.add(e.target.id)
            tag.classList.add('chosen')
            showTagedTasks(e, tasksCollection)  
        }
    })


})