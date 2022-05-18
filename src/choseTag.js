function choseTag(e, chosenTags){

    if(chosenTags.includes(e.target.innerText)){ 
        for(let i=0; i<chosenTags.length; i++){ 
           if(chosenTags[i] == e.target.innerText){ 
               chosenTags.splice(i, 1)
            }
        }
    } else {
        chosenTags.push(e.target.innerText)
    }
    return chosenTags
} 

export default choseTag
