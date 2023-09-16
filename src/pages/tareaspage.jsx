import React, { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tareasApi";

function TareasPage(){

    const [tareas, setTareas]=useState([]);

    const loadTask= async () =>{
        const response= await getTaskRequest();
        console.log(response);
        setTareas(response.data);
    }

    useEffect(()=>{
        loadTask();
    },[])

    return(
        <>
        <h1>Tareas</h1>
        {
            tareas.map(tarea=>(
                <div key={tarea.id}>
                    <h2>{tarea.title}</h2>
                    <p>{tarea.description}</p>
                    <span>{tarea.done == 1 ? "done": "not done" }</span>
                    <span>{tarea.createAt}</span>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            ))
        }
        </>
    );
}

export default TareasPage;