function lightTheTag(chosenTags) { 
    const tags = Array.from(document.querySelectorAll('.tag'));
    for(let i=0; i<tags.length; i++){
         if(chosenTags.includes(tags[i].id)){
             tags[i].classList.add('chosen');
         } else { 
            tags[i].classList.remove('chosen');
         }
    }
}

export default lightTheTag