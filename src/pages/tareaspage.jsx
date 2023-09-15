import React, { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tareasApi";

function TareasPage(){

    const [tareas, setTareas]=useState([]);
    
    const loadTask= async () =>{
        const response= await getTaskRequest();
        console.log(response);
    }

    useEffect(()=>{
        loadTask();
    },[])

    return(
        <>
        <h1>Tareas</h1>

        </>
    );
}

export default TareasPage;