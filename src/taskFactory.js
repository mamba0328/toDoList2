function makeTask(name, deadline = 'today', notes = '', tags = ''){ 

    let id = Math.floor(Math.random()*100000); //needed to identify task 
    return {name, deadline, notes, tags, id}
}

export default makeTask;