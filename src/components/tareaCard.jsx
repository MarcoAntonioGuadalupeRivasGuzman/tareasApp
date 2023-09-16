import React from "react";
import { deleteTaskRequest } from "../api/tareasApi";

function TareaCard({ tarea }) {

    const onDelete= async (id)=>{
        try{
        const response= await deleteTaskRequest(id);
        console.log(response);
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <div>
            <h2>{tarea.title}</h2>
            <p>{tarea.description}</p>
            <span>{tarea.done == 1 ? "done" : "not done"}</span>
            <span>{tarea.createAt}</span>
            <button onClick={()=>onDelete(tarea.id)}>Delete</button>
            <button>Edit</button>
        </div>
    );
}

export default TareaCard;