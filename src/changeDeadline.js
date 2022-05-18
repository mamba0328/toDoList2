function changeDeadline(e, chosenDeadline){

    e.target.style.color = 'rgb(26, 153, 26)';
    
    if(e.target.innerText == 'Today'){ 
        chosenDeadline = 0;
    }
    if(e.target.innerText == 'Tommorow'){ 
        chosenDeadline = 1;
    }
    if(e.target.innerText == 'Someday'){ 
        chosenDeadline = 2;
    }


    return chosenDeadline
}

export default changeDeadline