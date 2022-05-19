function makeTask(name, deadline = 'today', notes = '', tags = '', getTask){ 
    
    let deleted = 0;
    let id = Math.floor(Math.random()*100000); //needed to identify task 
    
    function putTask(){
        console.log(this.deleted)
        if(this.deleted == undefined){
        let tasks = getTask();
        let task = [this.name, this.deadline, this.notes, this.tags, id];
        tasks.push(task);
        localStorage.setItem('task', JSON.stringify(tasks));
     }
    }

    return {name, deadline, notes, tags, id, putTask}
}

export default makeTask