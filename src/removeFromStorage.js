function refreshStoraged (tasksCollection, getTask){ 
localStorage.clear()
tasksCollection.forEach(task => { 
    task.putTask();
})
} 

export default refreshStoraged; 