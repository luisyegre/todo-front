import { useState } from "react";

export function useForm(initValue){
  const [value,setValue]=useState(initValue);
  function handler(ev,otherEvent){
    ev.preventDefault()
    const formData=new FormData(ev.target);
    const entries=Object.fromEntries(formData.entries());
    setValue({...entries});
  }
  return [value,handler]
}