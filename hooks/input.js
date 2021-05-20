import { useState } from "react";

export function useInput(initValue){
  const [value,setValue]=useState(initValue);
  function handler(ev){
    setValue(ev.target.value);
  }
  return [value,handler]
}