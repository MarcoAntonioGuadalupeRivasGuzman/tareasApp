import React from "react";
import { deleteTaskRequest } from "../api/tareasApi";
import { useTarea } from "../context/tareasContext";

function TareaCard({ tarea }) {

    const {onDelete} = useTarea();

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