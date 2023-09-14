import axios from "axios";

export const createTaskRequest = async (tarea)=>{
    console.log(tarea);

    const url='http://localhost:3300/tareas';

    let fetchData={
        method:'POST',
        body: tarea,
        headers: new Headers()
    }

    console.log(fetchData);

    return await fetch(url,fetchData);
}

export const createTaskTwo = async (tarea)=>{
   return await axios.post('http://localhost:3300/tareas',tarea);
}