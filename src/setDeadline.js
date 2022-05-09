function choseDeadline(chosenDeadline) { 

    const deadlines = Array.from(document.getElementsByClassName('deadline'));

    deadlines.forEach(deadline => { 
        deadline.addEventListener('mouseover', (e)=> { 
             e.target.style.borderBottom = '1px solid black'
        })
        deadline.addEventListener('mouseout', (e)=> { 
            e.target.style.borderBottom = 'none'
        })
    })
        for(let i=0; i<deadlines.length; i++){ 

         deadlines[i].addEventListener('click', ()=> { 
                return chosenDeadline = i;
            })
        }
        
}

export default choseDeadline;