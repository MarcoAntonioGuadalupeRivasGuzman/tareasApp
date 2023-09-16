import React, { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tareasApi";
import TareaCard from "../components/tareaCard";

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
                <TareaCard tarea={tarea} key={tarea.id} />
            ))
        }
        </>
    );
}

export default TareasPage;