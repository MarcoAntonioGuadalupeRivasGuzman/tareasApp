import React from "react";
import { deleteTaskRequest } from "../api/tareasApi";
import { useTarea } from "../context/tareasContext";
import { useNavigate } from "react-router-dom";

function TareaCard({ tarea }) {

    const {onDelete} = useTarea();
    const navigate=useNavigate();

    return (
        <div>
            <h2>{tarea.title}</h2>
            <p>{tarea.description}</p>
            <span>{tarea.done == 1 ? "done" : "not done"}</span>
            <span>{tarea.createAt}</span>
            <button onClick={()=>onDelete(tarea.id)}>Delete</button>
            <button onClick={()=>navigate(`/edit/${tarea.id}`)}>Edit</button>
        </div>
    );
}

export default TareaCard;