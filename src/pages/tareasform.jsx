import React, { useState } from "react";

function TareasForm(){
    const [title, setTitle]=useState('');
    const [descripcion, setDescripcion]=useState('');

    const onTitleChange=(event)=>{
        setTitle(event.target.value);
    }

    const onDescriptionChange=(event)=>{
        setDescripcion(event.target.value);
    }

    const onSubmitForm=(title, descripcion)=>{
        console.log(title);
        console.log(descripcion);
    }
    return(
        <>
        <div>
            <form>
                <label>Title</label>
                <input type="text" value={title} placeholder="Dominar el mundo"
                onChange={(event)=>onTitleChange(event)}/>
                <label>Descripcion</label>
                <textarea rows="3" value={descripcion} placeholder="Escribe algo"
                onChange={(event)=>onDescriptionChange(event)}></textarea>
                <button type="button" onClick={()=>onSubmitForm(title,descripcion)}>Save</button>
            </form>
        </div>
        </>
    );
}

export default TareasForm;
