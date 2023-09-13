export const createTaskRequest = (tarea)=>{
    console.log(tarea);

    const url='http://localhost:3300/tareas';

    let fetchData={
        method:'POST',
        body: tarea,
        headers: new Headers()
    }

    fetch(url,fetchData);
}