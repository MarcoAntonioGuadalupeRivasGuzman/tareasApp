import React, { createContext, useContext, useState } from "react";
import { deleteTaskRequest, getTaskRequest, getTasksRequest } from "../api/tareasApi";

export const TareaContext = createContext();

export const useTarea = () => {
    const context = useContext(TareaContext);
    if (!context) {
        throw new Error("useTarea must be used within a TaskContextProvider");
    }
    return context;
}

export const TareaContextProvider = ({ children }) => {

    const [tareas, setTareas] = useState([]);

    const loadTask = async () => {
        const response = await getTasksRequest();
        console.log(response);
        setTareas(response.data);
    }

    const onDelete= async (id)=>{
        try{
        const response= await deleteTaskRequest(id);
        setTareas(tareas.filter(tarea => tarea.id!==id));
        console.log(response);
        }
        catch (error){
            console.error(error);
        }
    }

    const getTask = async (id)=>{
        try{
            const response= await getTaskRequest(id);
            return response.data;
        }
        catch (error){
            console.error(error);
        }
    }

    return (
        <TareaContext.Provider value={{ tareas, loadTask , onDelete, getTask}}>
            {children}
        </TareaContext.Provider>
    );
};