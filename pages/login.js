import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { FormLogin } from "../components/form-login";
import { userIsLogged } from '../libs/utils'
import { AuthController } from '../auth/auth.controller'


export default function Login(){
  const [isLogged,updateLogged]=useState(true)
  const route = useRouter();

  useEffect(()=>{
    if (userIsLogged(localStorage)){
      route.push('/')
    }else{
      updateLogged(false)
    }
  });

  async function handleLogin(ev,user){
    const userCon=new AuthController()
    const {data,error,message}=await userCon.authenticate(user);
    if (!error){
      console.log(data.user)
      localStorage.setItem('sToken',data.token)
      localStorage.setItem('userData',JSON.stringify(data.user))
      updateLogged(true);
    }else{
      alert(message);
    }
  }
  return (
    !isLogged?
    <>
      <FormLogin onLogin={handleLogin}/>
    </>
    :""
  )
}
