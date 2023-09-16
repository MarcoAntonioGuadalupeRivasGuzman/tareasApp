import React, { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tareasApi";
import TareaCard from "../components/tareaCard";
import { useTarea } from "../context/tareasContext";

function TareasPage(){

    const {tareas, loadTask} = useTarea();

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