let getTask = function(){ 
    const tasksLocalStorage = localStorage.getItem('task')
     if(tasksLocalStorage !== null){
       return JSON.parse(tasksLocalStorage);
     }
  return []
 };

 export default getTask