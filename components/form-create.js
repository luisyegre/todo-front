import { useInput } from "../hooks/input";
import { BorderContainer } from './utils/border-container'
import { Button } from "./utils/button";
import { FieldContainer } from "./utils/field-container";
import { Input } from '../components/utils/input';

export function FormCreate({onCreate}){
  const [tarea,setTarea] = useInput('');
  
  return (
    <>
      <BorderContainer>
        <form onSubmit={(ev)=>{
          ev.preventDefault()
          onCreate(ev,tarea)
        }}>
          <FieldContainer>
            <label htmlFor="tarea">Tarea</label>
            <Input id="tarea" placeholder="que tienes que hacer hoy?" value={tarea} onChange={setTarea}/>
          </FieldContainer>
          <FieldContainer>
            <Button bor-radius='99px'>Create✔</Button>
          </FieldContainer>
        </form>
      </BorderContainer>
      <style jsx>{`
        form{
          display:flex;
          flex-direction:column;
          padding:20px;
        }
        label{
          text-align:left;
          font-size:14px;
          font-weight:600;
        }
      `}</style>
    </>
  )
}