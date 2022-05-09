function makeTask(name, deadline = 'today', notes, tags){ 
    notes = ''; 
    tags = '';
    return {name, deadline, notes, tags}
}

export default makeTask;