import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "../components/utils/button";
import { Title } from "../components/utils/title";

export function AppLayout({children}){
  const route=useRouter()
  const [userData,setUserData]=useState({nombre:''})
  useEffect(()=>{
    setUserData(JSON.parse(localStorage.getItem('userData')))
  },[]);
  return (
    <>
      <header>
        <Title>App</Title>
        <p>{userData['nombre']}</p>
        <nav>
          <Button onClick={()=>{
            console.log("loguoting")
            localStorage.removeItem('sToken')
            route.push('/login')
          }}>Log Out</Button>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <style jsx>{` 
        header{
          background-color:#222;
          padding:0px 2em;
          color:#fff;
          display:flex;
          flex-wrap:nowrap;
          align-items:center;
          justify-content:space-between;
        }
      `}</style>
      <style jsx global>{`
        *{
          box-sizing:border-box;
          font-weight:normal;
          z-index:99;
        }
        header{
          z-index:999;
        }
        body{
          padding:0;
          margin:0;
          font-family:Arial;
        }  
      `}</style>
    </>
  )
}