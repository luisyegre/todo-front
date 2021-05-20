import { useState } from "react";
import { useInput } from "../hooks/input";

export function Tarea({data,onEdit,onDelete}){
  const [isEditing,toggleEdit]=useState(false) 
  const [tarea,setTarea]=useInput(data.tarea);

  function handleEdit(onEdit){
    onEdit=onEdit? onEdit:()=>{};
    return (ev)=>{
      toggleEdit(!isEditing);
      onEdit(ev,tarea);
    }
  }

  function handleDelete(onDelete){
    onDelete=onDelete? onDelete:()=>{};
    return (ev)=>{
      onDelete(ev);
    }
  }
  return (
    <>
      <div className="tarea-container">
        <p className="tarea-count">{data.id}</p>
        {
          !isEditing?
            <p className="tarea-content">{data.tarea}</p> :
            <input className="tarea-edit__input" onChange={setTarea} value={tarea}/>
        }
        <div className="tarea-actions">
          <button onClick={
            !isEditing?
              ()=>{toggleEdit(!isEditing)}:
              handleEdit(onEdit)
            }>{!isEditing? '✒':'✅'}</button>
          <button onClick={
            !isEditing?
              handleDelete(onDelete):
              ()=>{toggleEdit(!isEditing)}
          }>❌</button>
        </div>
      </div>
      <style jsx>{`
        .tarea-container{
          margin:20px;
          border-radius:10px;
          padding:5px;
          text-align:center;
          box-shadow:1px 1px 8px 0px rgba(0,0,0,.25);
          display:flex;
          align-items:center;
          justify-content:space-between;
        }
        .tarea-content{
          margin:20px auto;
        }
        .tarea-edit__input{
          border:none;
          font-size:20px;
          text-align:center;
          border-bottom:2px solid black;
          outline:none;
          width:100%;
          margin:10px;
        }
        .tarea-actions{
          display:flex;
        }
        .tarea-count{
          font-size:1.5em;
          margin-left:5px;

        }
        .tarea-actions >button{
          border:none;
          padding:10px;
          cursor:pointer;
          background:inherit;
          font-size:1em;
        }
        .tarea-actions>button:hover{
          text-shadow:1px 1px 3px #333;
        }
      `}</style>
    </>
  )
}