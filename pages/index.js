import { useEffect, useState } from 'react';
import {FormCreate} from '../components/form-create';
import { FlashMessages } from '../components/utils/flash-message';
import { Tarea } from '../components/tarea';
import { AppLayout } from '../layouts/app';
import { TareaController } from '../tarea/tareas.controller';
import { useRouter } from 'next/router';
 
import { 
  userIsLogged,
  findAndUpdate,
  findAndDelete,
  findTodo,
  getIdFromHtml
} from '../libs/utils'


export default function Index(){
  const [todos,setTodos]=useState([])
  const [flashMessages,setFlashMessages]=useState('')
  const [isLogged,updateLogged]=useState(false);

  const route = useRouter()
  const controller=new TareaController();

  function showFlashes(msj){
    setFlashMessages(msj);
    const $flash=document.querySelector('.flash-message');
    $flash.style.animation="showFlashes 1s"
    setTimeout(()=>{
      $flash.style.animation="unShowFlashes 1s"
    },2000)
    setTimeout(()=>{
      setFlashMessages('')
    },3000)
    
  }
  async function handleTaskEdit(ev,tarea){
    const id=getIdFromHtml(ev.target)
    if (!tarea){
      showFlashes('los campos estan vacios')
    }
    const {error,message,data}=await controller.update({id,tarea})
    if (!error){
      setTodos([...findAndUpdate(todos,id,data)])
    }
    showFlashes(message)
  }
  async function handleTaskDelete(ev){
    const id=getIdFromHtml(ev.target)
    const {error,message}=await controller.delete(id);
    if (!error){
      setTodos([...findAndDelete(todos,id)])
    }
    showFlashes(message);
  }
  async function handleTaskCreate(ev,tarea){
    console.log(tarea)
    if (!tarea){
      showFlashes('los campos estan vacios');
      return
    }
    const {data,message,error}=await controller.create(tarea);
    if (!error){
      todos.push(data);
      setTodos([...todos])
    }
    showFlashes(message)
  }
  useEffect(()=>{
    if (!userIsLogged(localStorage)){
      route.push('/login')
      updateLogged(false);
    }else{
      const token=localStorage.getItem('sToken');
      controller.setToken(token) 
      updateLogged(true);
    }
  })
  useEffect(async ()=>{
    const {error,data}= await controller.getAll();
    const todosBack =  error? []:data
    console.log(todosBack)
    setTodos(todosBack)
  },[])
  return (
    <>
      {isLogged?
        <AppLayout>
          <FlashMessages>
            {flashMessages}
          </FlashMessages>
          <FormCreate onCreate={handleTaskCreate}/>
          {
            todos.map( (tarea,i) =>(
              <Tarea 
              key={i}
              data={tarea} 
              onDelete={handleTaskDelete}
              onEdit={handleTaskEdit}/>
              )
            )
          }
        </AppLayout> :''
      } 
    </>
  )
}
