import { FieldContainer } from './utils/field-container';
import { BorderContainer } from './utils/border-container';
import { Button } from './utils/button';
import { Input } from './utils/input';
import { useForm } from '../hooks/form';
import { Title } from './utils/title';
import { useInput } from '../hooks/input';



export function FormLogin({onLogin}){
  const [email,setEmail]=useInput('')
  const [password,setPassword]=useInput('')

  return (
    <>
      <div className="container">
        <BorderContainer>
          <Title>Welcome to login</Title>
          <form onSubmit={(ev)=>{
              ev.preventDefault();
              onLogin(ev,{email,password})
            }}>
            <FieldContainer>
              <label htmlFor="email">email</label>
              <Input type="email" id="email" value={email} onChange={setEmail} placeholder="ingrese su email"/>
            </FieldContainer>
            <FieldContainer>
              <label htmlFor="password">password</label>
              <Input type="password" id="password" value={password} onChange={setPassword} placeholder="ingrese su contraseña"/>
            </FieldContainer>
            <FieldContainer>
              <Button type="submit" bor-radius='99px' >Loggin</Button>
            </FieldContainer>
          </form>
        </BorderContainer>
        <style jsx>{`
          form{
            display:flex;
            flex-direction:column;
            padding:10px;
          }

          label{
            text-align:left;
            font-size:14px;
            font-family:Arial;
            color:gray;
            font-weight:600;
          }
          .container{
            display:grid;
            width:100vw;
            height:90vh;
            place-items:center;
          }
          #error{
            color:red;
            border:1px solid red;
            background:lightpink;
            border-radius:5px;
            padding:3px 8px;
            display:flex;
            flex-direction:column;
          }
        `}</style>
        <style jsx global>{`
          *{
            font-family:Arial;
            box-sizing:border-box;
          }
        `}</style>
      </div>
    </>
  )
}