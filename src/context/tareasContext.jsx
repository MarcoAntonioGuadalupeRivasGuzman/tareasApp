import React, { createContext, useContext, useState } from "react";
import { getTaskRequest } from "../api/tareasApi";

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
        const response = await getTaskRequest();
        console.log(response);
        setTareas(response.data);
    }

    return (
        <TareaContext.Provider value={{ tareas, loadTask }}>
            {children}
        </TareaContext.Provider>
    );
};